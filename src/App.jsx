import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background">
        <div className="content">
        </div>
      </div>

      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SORU ÇÖZ(opsiyonel)</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-primary me-2">Giriş Yap</button>
              <button type="button" class="btn btn-primary">Kayıt Ol</button>
            </div>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SORU ÇÖZ(opsiyonel)</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#signupModal">Giriş Yap</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LogModal">Kayıt Ol</button>


            </div>
          </div>
        </div>
      </nav>



      {/* */}

      <div class="container mt-4">
        <div class="row g-3">
          <div class="col-12 bg-transparent">
            <div className="bg-primary">
              <div class="p-5 text-start bg-dark rounded-3">
                <h1 class="text-white fst-italic">Biz kimiz?</h1>
                <p class="lead text-white ">
                  <div class="overflow-auto mb-4 "> Sorular ile boğuşup, aynı zamanda iyi bir yere gelmek isteyen öğrenciler için varız! Bıktınız biliyoruz. Artık buna son verme vakti geldi. Ne bekliyorsun? Bizde ki tek eksik sensin, hadi katıl sende! </div>
                  <button type="button" class="btn btn-success-subtle bg-success text-white px-5 " data-bs-toggle="modal" data-bs-target="#LogModal2">Daha ne bekliyorsun!</button>
                </p>
              </div>
            </div>
          </div>


          {/* Teste yönlendiren Sayfa */}

          <div class="col-3">
            <div class="bg-secondary">
              <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">List group item heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">now</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Another title here</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">3d</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">1w</small>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Eklenen yeni testler */}



          <div class="col-3">
            <div class="bg-success p-">
              <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">List group item heading</h6>
                        <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"></img>
                        {/* Denemek için koydum kalsın */}
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">now</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Another title here</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">3d</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">1w</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Öğretmen duyuru tablosu */}

          <div className="col-6">
            <div className="bg-warning p-3 ">
              <h4 class="fst-italic">Öğretmenden Duyurular</h4>
              <ul class="list-unstyled">
                <li>
                  <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                    <div class="col-lg-8">
                      <h6 class="mb-0">Example blog post title</h6>
                      <small class="text-body-secondary">January 15, 2024</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                    <div class="col-lg-8">
                      <h6 class="mb-0">This is another blog post title</h6>
                      <small class="text-body-secondary">January 14, 2024</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                    <div class="col-lg-8">
                      <h6 class="mb-0">Longer blog post title: This one has multiple lines!</h6>
                      <small class="text-body-secondary">January 13, 2024</small>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Boş tablo */}

          </div>
          <div className="col-12">
            <div className="bg-warning">

            </div>
          </div>

          {/* Slide Show şeysi (türkçesini unuttum) */}
          {/* <div className="col-12">

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="örnek_foto.jpg" class="d-block w-auto" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://picsum.photos/200/300" class="d-block w-auto" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://picsum.photos/200/300" class="d-block w-auto" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
          </div>
            </div> */}

          <div class="container my-5">
            <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
              <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
              <svg class="bi mt-5 mb-3" width="48" height="48"><use xlink:href="#check2-circle"></use></svg>
              <h1 class="text-body-emphasis">Placeholder jumbotron</h1>
              <p class="col-lg-6 mx-auto mb-4">
                This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
              </p>
              <button class="btn btn-primary px-5 mb-5" type="button">
                Call to action
              </button>
            </div>
          </div>

          {/* Deneme tahtası buranın altı */}
          {/* <h1 class="text-hide" style="background-image: url('örnek_foto.jps'); width: 50px; height: 50px;">Bootstrap</h1> */}


          {/* 
            <div class="text-center">
              <img src="..." class="rounded" alt="..."></img>
              <span class="border-bottom-0">
              
              </span>
              </div> */}




          <button
            class="btn btn-primary"
          >
            Notifications
            <span
              class="badge bg-primary"
            >20</span

            >
          </button>

          <div class="container-fluid">
            <div class="row">
              <div
                class="col-sm-4"
              >
                --
              </div>
              <div
                class="col-4"
              >
                <div className="col-6">
                  <div class="media">
                    <img src="örnek_foto.jpg" class="img-fluid" alt="Responsive image"></img>
                    <div class="media-body">
                      <h5 class="mt-0">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
              Second Column
            </div>
          </div>



          {/* <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalTitleId">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="container-fluid">Add rows here</div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">Save</button>
                    </div>
                  </div>
                </div> 
         </div> */}

          {/* <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                  <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-5 pt-0">
                  <form class="">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                    <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                    <hr class="my-4" />
                    <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                    <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                      <svg class="bi me-1" width="16" height="16">
                        <use xlink:href="#twitter"></use>
                      </svg>
                      Sign up with Twitter
                    </button>
                    <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                      <svg class="bi me-1" width="16" height="16">
                        <use xlink:href="#facebook"></use>
                      </svg>
                      Sign up with Facebook
                    </button>
                    <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                      <svg class="bi me-1" width="16" height="16">
                        <use xlink:href="#github"></use>
                      </svg>
                      Sign up with GitHub
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}


          {/* giriş ol pop up */}
          <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-4 shadow bg-dark text-white">
                <div className="modal-header p-5 pb-4 border-bottom-0">
                  <h1 className="fw-bold mb-0 fs-2">Giriş Yap! </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-5 pt-0">
                  <button type="button" className="btn btn-outline-success-subtle w-100 mb-3 bg-success text-white">Kayıtlı değil misiniz? Kayıt Ol</button>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="emailInput" className="form-label">E-posta adresi</label>
                      <input type="email" className="form-control" id="floatingInput" placeholder="isim@örnek.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="passwordInput" className="form-label">Şifre</label>
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Şifre giriniz." />
                    </div>
                    <button className="w-100 mb-2 btn btn-outline-success rounded-3 btn-primary bg-success text-white" type="submit">Giriş Yap</button>
                    <small className="text-body-secondary">Giriş Yap'a tıkladığınızda şartları kabul etmiş sayılırsınız.</small>
                    <hr className="my-4" />
                    <h2 className="fs-5 fw-bold mb-3">Öğretmen veya Öğrenci Olarak Giriş Yap</h2>
                    <div className="mb-3 form-check">
                      <input type="radio" id="studentRadio" name="role" className="form-check-input" value="student" />
                      <label className="form-check-label" htmlFor="studentRadio">Öğrenci</label>
                    </div>
                    <div className="mb-3 form-check">
                      <input type="radio" id="teacherRadio" name="role" className="form-check-input" value="teacher" />
                      <label className="form-check-label" htmlFor="teacherRadio">Öğretmen</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


          {/* Kayıt ol pop up */}
          <div className="modal fade" id="LogModal" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-4 shadow bg-dark text-white">
                <div className="modal-header p-4 pb-4 border-bottom-0">
                  <h1 className="fw-bold mb-0 fs-2">Ücretsiz kayıt ol!</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-5 pt-0">
                  <button type="button" className="btn btn-outline-success-subtle w-100 mb-3 bg-success text-white">Hesabınız zaten var mı?</button>
                  <form>
                    <div className="mb-2">
                      <label htmlFor="textInput" className="form-label">Kullanıcı Adı</label>
                      <input type="text" className="form-control" id="floatingInput" placeholder="Kullanıcı Adınızı giriniz." />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="textInput" className="form-label">İsim</label>
                      <input type="text" className="form-control" id="floatingInput" placeholder="Adınızı giriniz." />
                      <div className="mb-2"></div>
                    </div>
                    <label htmlFor="textInput" className="form-label">Soyisim</label>
                    <input type="text" className="form-control" id="floatingInput" placeholder="Soyisminizi giriniz." />
                    <div className="mb-2">
                    </div>
                    <div className="mb-2">
                      <label htmlFor="emailInput" className="form-label">E-posta adresi</label>
                      <input type="email" className="form-control" id="floatingInput" placeholder="isim@örnek.com" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="passwordInput" className="form-label">Şifre</label>
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Şifreni gir" />
                      <div className="mb-2">
                      </div>
                      <label htmlFor="passwordInput" className="form-label">Şifre Onayla</label>
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Şifrenizi tekrar girin." />
                      <div className="mb-2">
                      </div>
                      <label htmlFor="passwordInput" className="form-label">Referans Kodu</label>
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Öğretmenseniz referans kodunuzu giriniz." />
                      <div className="mb-2">

                      </div>
                    </div>

                    <button className="w-100 mb-1 btn btn-lg rounded-2 btn-outline-success-subtle bg-success text-white " type="submit">Kayıt Ol</button>
                    <small className="text-body-secondary">Kayıt Ol butonuna tıklayarak, şartları kabul etmiş olursunuz.</small>

                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-primary">Left</button>
                      <button type="button" class="btn btn-primary">Middle</button>
                    </div>


                    <input type="radio" class="btn-check" name="options" id="Öğrenci" autocomplete="off" checked />
                    <label class="btn btn-secondary" for="option1">Öğrenci</label>
                    <div className="d-grid gap-2">
                    </div>

                    <input type="radio" class="btn-check" name="options" id="Öğretmen" autocomplete="off" />
                    <label class="btn btn-secondary" for="option2">Öğretmen</label>

                    <hr className="my-3" />
                    <h2 className="fs-5 fw-bold mb-3">Öğretmen veya Öğrenci misiniz?</h2>
                    <div className="mb-2 form-check btn-outline-success-subtle text-white">
                      <input type="radio" id="studentRadio" name="role" className="form-check-input" value="student" />
                      <label className="form-check-label" htmlFor="studentRadio">Öğrenci</label>
                    </div>
                    <div className="mb-2 form-check btn-outline-success-subtle text-white">
                      <input type="radio" id="teacherRadio" name="role" className="form-check-input" value="teacher" />
                      <label className="form-check-label" htmlFor="teacherRadio">Öğretmen</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>



          <div className="modal fade" id="LogModal2" tabIndex="-1" data-bs-backdrop="static" role="dialog" data-bs-keyboard="false" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                {/* <div className="modal-header "> */}
                  <div class="col-12 mx-auto px-4">
                    {/* <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5"> */}
                      <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" data-bs-dismiss="modal"aria-label="Close"></button>
                      <svg class="bi mt- mb-" width="48" height="48"><use xlink:href="#check2-circle"></use></svg>
                      <h1 class="text-body-emphasis ma">Placeholder jumbotron</h1>
                      <p class="col-lg-6 mx-auto width-auto ">
                        This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                      </p>
                      <button class="btn btn-primary px-4 p-1 m-4" type="button">
                        Call to action
                      </button>
                    </div>
                  {/* </div> */}

                {/* </div> */}
              </div>
            </div>
          </div>







          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Understood</button>
                </div>
              </div>
            </div>
          </div>













        </div>
      </div >

    </>
  )
}



export default App
