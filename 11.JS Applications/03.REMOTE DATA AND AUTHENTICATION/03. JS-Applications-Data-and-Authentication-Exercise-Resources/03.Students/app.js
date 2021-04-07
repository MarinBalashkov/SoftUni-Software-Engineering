function attachEvents() {
    window.addEventListener('load', onLoadStudents);
    document.getElementById('form').addEventListener('submit', onSubmitStudent)
}

attachEvents();

async function onSubmitStudent(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    postStudent([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    
}

async function onLoadStudents() {
    const tbody = document.querySelector('tbody');
    const studentsList = await getStudentsData();

    Array.from(Object.values(studentsList)).forEach(s => {
        const trElement= document.createElement('tr');

        const firstname = document.createElement('th');
        firstname.textContent = s.firstName;
        const lastName = document.createElement('th');
        lastName.textContent = s.lastName;
        const facultyNumber = document.createElement('th');
        facultyNumber.textContent = s.facultyNumber;
        const grade = document.createElement('th');
        grade.textContent = Number(s.grade).toFixed(2);

        trElement.appendChild(firstname);
        trElement.appendChild(lastName);
        trElement.appendChild(facultyNumber);
        trElement.appendChild(grade);

        tbody.appendChild(trElement);        
    });
}

async function getStudentsData(){
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/students');
        const data = await response.json();
        return data;
    } catch (error) {
        return alert('Empty students collection');
    } 
}

async function postStudent(data) {
    if (!data.firstName || !data.lastName || !data.facultyNumber || !Number(data.grade)) {
        return alert('Input field must not be empty or grade is not a nuber');
    }

    const obj = {
        firstName: data.firstName,
        lastName: data.lastName, 
        facultyNumber: data.facultyNumber,
        grade: data.grade
    };
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });
    
        if (response.status == 200) {
            window.location.pathname = 'index.html';
        } else {
            throw new Error(await response.json());
        }
        
    } catch (err) {
        console.error(err.message);
        
    }


    const result = await response.json();
    console.log(result);

}