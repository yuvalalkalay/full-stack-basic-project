const url = 'http://localhost:8080/api/student';
let inc = 0;

const homepage=async ()=>{
    const tbl = document.getElementById('homePageTable');
    const respond = await fetch(url);
        if(respond.ok){
            const students = await respond.json();
            console.log(students);

            students.forEach(element => {
                const tr = document.createElement('tr');
                const tdName = document.createElement('td');
                const tdFaculty = document.createElement('td');
                const tdGrade = document.createElement('td');
                const tdEdit = document.createElement('td');
                const tdDelet = document.createElement('td');
                const EditB = document.createElement('button');
                const DeleteB = document.createElement('button');

                //set atributes
                tdName.setAttribute('onclick',`studentPage(${inc})`);
                tdName.setAttribute('class','td');
                EditB.setAttribute('onclick',`editFunction(${inc})`);
                EditB.setAttribute('class','editB');
                DeleteB.setAttribute('onclick',`deleteFunction(${inc})`);
                DeleteB.setAttribute('class','deleteB');
                tdGrade.setAttribute('onclick',`GradesPage(${inc})`);
                tdGrade.setAttribute('class','td');



                tdName.innerText = element.fullName;
                tdFaculty.innerText = element.Faculty;
                EditB.innerText = 'Edit';
                DeleteB.innerText = 'Delete';
                tdGrade.innerText = 'Grades'
                tdEdit.append(EditB);
                tdDelet.append(DeleteB);
                tr.append(tdName,tdFaculty,tdGrade,tdEdit,tdDelet);
                tbl.append(tr);
                inc ++;
            });
        }
        else{
            console.log('error');
        }
}

const editFunction = async (num)=>{
    const respond = await fetch(url);
        if(respond.ok){
            const studentArray = await respond.json();
            sessionStorage.setItem('id',studentArray[num]._id);
            window.location.href = 'EditPage.html';
        }else{
            console.log('error');
        }
}

const editPageOnload = async ()=>{
    const id = sessionStorage.getItem('id');
    const respond = await fetch(`${url}/${id}`);
    const nameInput = document.getElementById('name');
    const EmailInput = document.getElementById('Email');
    const FacultyInput = document.getElementById('Faculty');
    const BirthDayInput = document.getElementById('BirthDay');

    if(respond.ok){
        const studentArray = await respond.json();
    const h1 = document.getElementById('EditPageH1');
    const name = studentArray.fullName;
    h1.innerText = `edit to ${name}`
    nameInput.value = name;
    EmailInput.value = studentArray.Email;
    FacultyInput.value = studentArray.Faculty;
    BirthDayInput.value = `${studentArray.BirthDate.slice(0,10)}`;
    }
}

const UpdateButton = async ()=>{
    const id = sessionStorage.getItem('id');
    
    const nameInput = document.getElementById('name');
    const EmailInput = document.getElementById('Email');
    const FacultyInput = document.getElementById('Faculty');
    const BirthDayInput = document.getElementById('BirthDay');

    const studentUpdate ={
        fullName:nameInput.value,
        Email:EmailInput.value,
        Faculty:FacultyInput.value,
        BirthDate:BirthDayInput.value
    }

    console.log(studentUpdate);
    try {
        await fetch(`${url}/${id}`,{
            method:'put',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(studentUpdate)
        });     
        alert('update succesfully');   
    } catch (error) {
        console.log(error);
    }

    window.location.href = 'index.html';
}


const studentPage = async(num)=>{
    const respond = await fetch(url);
    if(respond.ok){
        const Num = num;
        sessionStorage.setItem('num',Num);
        window.location.href = 'studentPage.html';
    }
}

const studentPageOnload = async ()=>{
    const respond = await fetch(url);
    if(respond.ok){
        const num = sessionStorage.getItem('num');
        const studentArray = await respond.json();
            const h1 = document.getElementById('H1Student');
            const name = studentArray[num].fullName;
            const email = studentArray[num].Email;
            const faculty = studentArray[num].Faculty;
            const BD = studentArray[num].BirthDate;
            h1.innerText = `Student : ${name}`;

            tr = document.createElement('tr');
            const table = document.getElementById('studentPageTable');
            const tdName = document.createElement('td');
            const tdEmail = document.createElement('td');
            const tdFaculty = document.createElement('td');
            const tdBD = document.createElement('td');

            tdName.innerText = name;
            tdEmail.innerText = email;
            tdFaculty.innerText = faculty;
            tdBD.innerText = BD.slice(0,10);
            tr.append(tdName,tdEmail,tdFaculty,tdBD);
            table.append(tr);
    }

}

const creatNewStudentPage = ()=>{
    window.location.href = 'creatNewStudentPage.html';
}

const CreateNewStudentButton = async ()=>{
    const nameInput = document.getElementById('nameC');
    const EmailInput = document.getElementById('EmailC');
    const FacultyInput = document.getElementById('FacultyC');
    const BirthDayInput = document.getElementById('BirthDayC');

    console.log(BirthDayInput.value);

    const studentCreate ={
        fullName:nameInput.value,
        Email:EmailInput.value,
        Faculty:FacultyInput.value,
        BirthDate:`${BirthDayInput.value}`,
        Grades:[]
    }
    try {
        await fetch(url,{
            method:'post',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(studentCreate)
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

const GradesPage = async (Num)=>{
    const respond = await fetch(url);
    if(respond.ok){
        const students = await respond.json();
            const id = students[Num]._id;
        sessionStorage.setItem('num',Num);
        sessionStorage.setItem('id',id);
        window.location.href = 'GradePage.html';
    }
}

const GradePageLoad = async ()=>{
    let inc = 0 ;
    const respond = await fetch(url);
    if(respond.ok){
        const student = await respond.json();
        const num = sessionStorage.getItem('num');
        const h1 = document.getElementById('GradePageH1');
        const table = document.getElementById('GradePageTable');
        h1.innerText = `student : ${student[num].fullName}`;

        student[num].grades.forEach(element =>{
            const tr = document.createElement('tr');
            const tdGrade = document.createElement('td');
            const tdDate = document.createElement('td');
            const tdEdit = document.createElement('td');
            const EditB = document.createElement('button');
            EditB.setAttribute('class','editB');

            const tdDelete = document.createElement('td');
            const deleteB = document.createElement('button');
            deleteB.setAttribute('class','deleteB');
                deleteB.innerText = 'Delete';         
                EditB.innerText = 'edit';

                deleteB.setAttribute('onclick',`deleteGradeFunction(${inc})`);
                EditB.setAttribute('onclick',`editeGradeFunction(${inc})`);

                tdEdit.append(EditB);
                tdDelete.append(deleteB);

                tdGrade.innerText = element.Grade;
                tdDate.innerText = element.date;
                tr.append(tdGrade,tdDate,tdEdit,tdDelete);
                table.append(tr);
                inc++;
        })

    }
}

const addGrade = async ()=>{
    const respond = await fetch(url);
        if(respond.ok){
            const Grade = document.getElementById('Grade').value;
            const date = document.getElementById('Date').value;

            const num = sessionStorage.getItem('num');
            const student = await respond.json();
            const id = student[num]._id;

            let obj={
                fullName: student[num].fullName,
                Email: student[num].Email,
                Faculty: student[num].Faculty,
                BirthDate: student[num].BirthDate,
                grades: student[num].grades
            }
                obj.grades.push({
                    Grade:`${Grade}`,
                    date:date
                })
                console.log(obj);
                await fetch(`${url}/${id}`,{
                    method:'put',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(obj)
                });

            window.location.href = 'GradePage.html';
        }else{
            console.log('error');
        }
}

const deleteFunction = async (num) =>{
    const respond = await fetch(url);
        if(respond.ok){
            const students = await respond.json();
            const id = students[num]._id;
                await fetch(`${url}/${id}`,{
                    method:'delete',
                    headers:{
                        'Content-type': 'application/json'
                    }
                })
            alert('delete success')
            window.location.href = "index.html"
        }
}

const deleteGradeFunction = async (num)=>{
    const id = sessionStorage.getItem('id');
        const student = await fetch(`${url}/${id}`);
        if(student.ok){
            const studentjs = await student.json();

            studentjs.grades.splice(num,num);


            //const gradeId = studentjs.grades[num]._id;


            await fetch(`${url}/${id}`,{
                method:'put',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(studentjs)
                
            })
            window.location.href = 'GradePage.html';
        }

}

const homePagel = ()=>{
    window.location.href = 'index.html';
}

const  editeGradeFunction = async (num)=>{
    const id = sessionStorage.getItem('id');
    const respond = await fetch(`${url}/${id}`);
    if(respond.ok){
        const students = await respond.json();
            console.log(students);
         let grade = students.grades[num].Grade;
         let date = students.grades[num].date;

         grade = prompt('please enter grade:',grade);
         date = prompt(`please enter new date with the format yyyy-mm-dd`,date);

             students.grades[num].Grade = grade;
             students.grades[num].date = date;
             await fetch(`${url}/${id}`,{
                 method:'put',
                 headers:{
                     'Content-Type':'application/json'
                 },
                 body:JSON.stringify(students)
             })
             window.location.href='GradePage.html';
    }
}