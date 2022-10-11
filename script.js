let studentData = document.createElement('tbody');
let table=document.getElementById('student_data')

const htmlTable = (value) => {
     return `
<tr>
   <th>${value.name}</th>
   <th>${value.dateOfBirth}</th>
   <th>${value.house}</th>
   <th>${value.wizard}</th>
   <th>${value.ancestry}</th>
   <th>${value.hogwartsStudent}</th>
</tr>`
}

const URL = 'https://hp-api.herokuapp.com/api/characters/students'

 const fetchRequest = async(value) => {
         await fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const students = data
            .map(student=>{
                if( value.length > 0 && student.house == value){
                    return htmlTable(student);
                } 
                else if( value.length == 0) {
                    return htmlTable(student)
                }
                    
            }).join('');
    
              studentData.innerHTML = students;
              table.appendChild(studentData);
        });
    }

const renderAllStudents = () => {
    fetchRequest('')
};
const renderGryffindor = () =>{
    fetchRequest('Gryffindor')
}
const renderSlytherin = () => {
    fetchRequest('Slytherin')
}
const renderHufflepuff = () => { 
    fetchRequest('Hufflepuff') 
}
const renderRavenclaw = () => { 
    fetchRequest('Ravenclaw')
}

const allStudents = document.getElementById('fetch_all');
const gryffindor = document.getElementById('fetch_gryffindor');
const slytherin = document.getElementById('fetch_slytherin');
const hufflepuff = document.getElementById('fetch_hufflepuff');
const ravenclaw = document.getElementById('fetch_ravenclaw');


allStudents.addEventListener("click", renderAllStudents);
gryffindor.addEventListener("click", renderGryffindor);
slytherin.addEventListener("click", renderSlytherin);
hufflepuff.addEventListener("click", renderHufflepuff);
ravenclaw.addEventListener("click", renderRavenclaw);
