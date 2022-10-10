let studentData = document.createElement('tbody');
let div =document.getElementById('student_data')

const renderAllStudents = async() => {
    const result = await fetch('https://hp-api.herokuapp.com/api/characters/students')
    .then((response) => response.json())
    .then((data) => {
        const students = data
        .map(student=>{
            return `
             <tr>
                <th>${student.name}</th>
                <th>${student.dateOfBirth}</th>
                <th>${student.house}</th>
                <th>${student.wizard}</th>
                <th>${student.ancestry}</th>
                <th>${student.hogwartsStudent}</th>
            </tr>`;
        })

          studentData.innerHTML = students;
          div.appendChild(studentData);
    });
}


let allStudents = document.getElementById('fetch_all');
allStudents.addEventListener("click", renderAllStudents);