const allStudents = document.getElementById('allStudents');
const studentData = document.getElementById('student_data');

const renderAllStudents = async() => {
    const result = await fetch('https://hp-api.herokuapp.com/api/characters/students')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

renderAllStudents();