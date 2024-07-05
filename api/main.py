from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from fastapi import FastAPI, HTTPException, Depends
from starlette.middleware.sessions import SessionMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session



# Veritabanı bağlantısı ORM
SQLALCHEMY_DATABASE_URL = "sqlite:///./quiz.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Soru modeli
class QuestionModel(Base):
    __tablename__ = "questions"

    soru_id = Column(Integer, primary_key=True, index=True)
    soru = Column(String, index=True)
    a = Column(String)
    b = Column(String)
    c = Column(String)
    d = Column(String)
    correct_answer = Column(String)

class UserModel(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    password = Column(String)
    name = Column(String)
    surname = Column(String)
    e_mail = Column(String)
    is_teacher = Column(Integer, default=0)
    is_student = Column(Integer, default=0)
    total_question = Column(Integer, default=0)
    correct_answer = Column(Integer, default=0)
    wrong_answer = Column(Integer, default=0)
    score = Column(Integer, default=0)

class LoginUser(BaseModel):
    username: str
    password: str

class RegisterUser(LoginUser):
    name: str
    surname: str
    e_mail: str
    is_teacher: int
    is_student: int

class QuestionSchema(BaseModel):
    soru: str
    a: str
    b: str
    c: str
    d: str
    correct_answer: str

class QuestionUpdate(QuestionSchema):
    pass




# Veritabanı oluşturma
Base.metadata.create_all(engine)

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key="hdisigorta")

# CORS ayarları
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Bu sadece test için. Güvenlik için spesifik domainler ekleyin.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# # add me some questions
# @app.on_event("startup")
# async def startup_event():
#     db = SessionLocal()
#     # check if there are any questions if not add some
#     if db.query(QuestionModel).count() == 0:
#         questions = [
#             {
#                 "soru": "2+2 kaç eder?",
#                 "a": "3",
#                 "b": "4",
#                 "c": "5",
#                 "d": "6",
#                 "correct_answer": "b"
#             },
#             {
#                 "soru": "3*3 kaç eder?",
#                 "a": "6",
#                 "b": "9",
#                 "c": "12",
#                 "d": "15",
#                 "correct_answer": "b"
#             },
#             {
#                 "soru": "4/2 kaç eder?",
#                 "a": "1",
#                 "b": "2",
#                 "c": "3",
#                 "d": "4",
#                 "correct_answer": "b"
#             }
#         ]
#         for q in questions:
#             db_question = QuestionModel(**q)
#             db.add(db_question)
#         db.commit()


@app.post("/register/", response_model=RegisterUser)
def register_post(user: RegisterUser, db: Session = Depends(get_db)):
    db_question = db.query(UserModel).filter(UserModel.username == user.username).first()
    if db_question is not None:
        raise HTTPException(status_code=404, detail="Kullanıcı zaten var")
    db_question = UserModel(**user.dict())
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question

# List me the users
@app.get("/users/")
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = db.query(UserModel).offset(skip).limit(limit).all()
    return users

# Get me a user from username
@app.get("/users/{username}")
def read_user(username: str, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.username == username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="Kullanıcı bulunamadı")
    return user

# Delete a user from username
@app.delete("/users/{username}")
def delete_user(username: str, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.username == username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="Kullanıcı bulunamadı")
    db.delete(user)
    db.commit()
    return {"message": "Kullanıcı başarıyla silindi"}


# Kullanıcı giriş endpoint'i
@app.post("/login/", response_model=LoginUser)
def login_post(user: LoginUser, db: Session = Depends(get_db), response: Response = None):
    db_user = db.query(UserModel).filter(UserModel.username == user.username).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="Kullanıcı bulunamadı")
    if db_user.password != user.password:
        raise HTTPException(status_code=404, detail="Şifre hatalı")
    
    return db_user
    

# Soru ekleme
@app.post("/questions/", response_model=QuestionSchema)
def create_question(question: QuestionSchema, db: Session = Depends(get_db)):
    db_question = QuestionModel(**question.dict())
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question

# Tüm soruları listeleme
@app.get("/questions/")
def read_questions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    questions = db.query(QuestionModel).offset(skip).limit(limit).all()
    return questions

# Belirli bir soruyu alma
@app.get("/questions/{soru_id}")
def read_question(soru_id: int, db: Session = Depends(get_db)):
    question = db.query(QuestionModel).filter(QuestionModel.soru_id == soru_id).first()
    if question is None:
        raise HTTPException(status_code=404, detail="Soru bulunamadı")
    return question

# Soru güncelleme
@app.put("/questions/{soru_id}", response_model=QuestionSchema)
def update_question(soru_id: int, question: QuestionUpdate, db: Session = Depends(get_db)):
    db_question = db.query(QuestionModel).filter(QuestionModel.soru_id == soru_id).first()
    if db_question is None:
        raise HTTPException(status_code=404, detail="Soru bulunamadı")
    for var, value in vars(question).items():
        setattr(db_question, var, value) if value else None
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question

# Soru silme
@app.delete("/questions/{soru_id}")
def delete_question(soru_id: int, db: Session = Depends(get_db)):
    question = db.query(QuestionModel).filter(QuestionModel.soru_id == soru_id).first()
    if question is None:
        raise HTTPException(status_code=404, detail="Soru bulunamadı")
    db.delete(question)
    db.commit()
    return {"message": "Soru başarıyla silindi"}



