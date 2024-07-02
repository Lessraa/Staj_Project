document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        soru: formData.get('soru'),
        a: formData.get('a'),
        b: formData.get('b'),
        c: formData.get('c'),
        d: formData.get('d'),
        correct_answer: formData.get('correct_answer')
    };
    
    const response = await fetch('http://localhost:8000/questions/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (response.ok) {
        document.getElementById('message').textContent = 'Soru başarıyla eklendi!';
        loadQuestions();
    } else {
        document.getElementById('message').textContent = 'Soru eklenirken bir hata oluştu: ' + result.detail;
    }
});

async function loadQuestions() {
    const response = await fetch('http://localhost:8000/questions/');
    const questions = await response.json();
    
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '<h2>Veritabanındaki Sorular</h2>'; // Başlığı tekrar ekleyin
    
    questions.forEach(question => {
        const card = document.createElement('div');
        card.className = 'question-card';
        
        card.innerHTML = `
            <h3>${question.soru}</h3>
            <p>A: ${question.a}</p>
            <p>B: ${question.b}</p>
            <p>C: ${question.c}</p>
            <p>D: ${question.d}</p>
            <p>Doğru Cevap: ${question.correct_answer}</p>
        `;
        
        container.appendChild(card);
    });
}

// Sayfa yüklendiğinde soruları yükleyin
window.onload = loadQuestions;