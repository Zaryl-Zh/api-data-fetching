let studentData = document.createElement('tbody');
let table=document.getElementById('student_data')

let sortAsc = false;
let sortColumn, students, studentSort;

const URL = 'https://hp-api.herokuapp.com/api/characters/students'

 const fetchRequest = async(value) => {
         await fetch(URL)
        .then((response) => response.json())
        .then((data) => {
             studentSort = data;
             students = studentSort
             htmlTable(value)
           
        });
        document.querySelectorAll('#student_data thead tr td').forEach(t => {
            t.addEventListener('click', sort, false);
            console.log('quiering on sort');
     });

        
    }
     
    const htmlTable = (value) => {
        let final = ''
        students.map(student=>{
        //    let st =student
        //    st.dateOfBirth.toString()
            if( value.length > 0 && student.house == value ){
            
               
             return final+=` <tr>
                <th>${student.name}</th>
                <th>${student.house}</th>
                <th>${student.dateOfBirth}</th>
                <th>${student.wizard}</th>
                <th>${student.ancestry}</th>
                <th>${student.hogwartsStudent}</th>
            </tr>`
            } 
            else if( value.length == 0) {

             return final+=` <tr>
                <th>${student.name}</th>
                <th>${student.house}</th>
                <th>${student.dateOfBirth}</th>
                <th>${student.wizard}</th>
                <th>${student.ancestry}</th>
                <th>${student.hogwartsStudent}</th>
            </tr>`
            }
                
        }).join('');

          studentData.innerHTML = final;
          table.appendChild(studentData);
          
   }

   function sort(event) {
    let value = '';
       let sorted = event.target.dataset.sort;
       if(sortColumn === sorted) sortAsc=!sortAsc;
       sortColumn = sorted;
       let result = studentSort
       result.sort((a,b) => {
        console.log(a[sortColumn]);
        if(a[sortColumn] > b[sortColumn] ) 
        return sortAsc?1:-1;
        if(a[sortColumn] < b[sortColumn]) 
        return sortAsc?-1:1;
        return 0;
       })
       htmlTable(value)
       }

   
const renderAllStudents = () => {
    fetchRequest('')
    // htmlTable('')
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
