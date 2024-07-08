async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8000/users/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        const tbody = document.querySelector('#userTable tbody');
        tbody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${user.name || ''}</td>
                <td>${user.surname || ''}</td>
                <td>${user.username || ''}</td>
                <td>${user.e_mail || ''}</td>
                <td>${user.is_teacher ? 'Teacher' : 'Student'}</td>
                <td>${user.total_question || 0}</td>
                <td>${user.correct_answer || 0}</td>
                <td>${user.wrong_answer || 0}</td>
                <td>${user.score || 0}</td>
            `;

            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        alert('An error occurred while fetching the user list.');
    }
}

window.onload = fetchUsers;