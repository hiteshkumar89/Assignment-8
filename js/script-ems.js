// // // CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 54345677, name: 'John Doe', ext: 1234, email: 'john.doe@gmail.com', department: 'Administrative' },
    { id: 54345688, name: 'Hitesh Patel', ext: 5678, email: 'hitesh.patel@gmail.com', department: 'Engineering' },
    { id: 54345644, name: 'Gina Lisi', ext: 3378, email: 'gina.lisi@gmail.com', department: 'Executive' },
    { id: 54345633, name: 'Alex Shaw', ext: 6678, email: 'alex.shaw@gmail.com', department: 'Marketing' },
    { id: 54345699, name: 'Gary Melony', ext: 8878, email: 'gary.melony@gmail.com', department: 'QA' }
];

// // // CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// // // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    //localStorage.setItem('employees', JSON.stringify(employees));
    employees = JSON.parse(localStorage.getItem('employees'));
}

// // // GET DOM ELEMENTS
let form = document.getElementById('addForm');
let empTable = document.getElementById('empTable');

// // // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', buildGrid);

// // // ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault(); // PREVENT FORM SUBMISSION

    let $ = (id) => document.getElementById(id)

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = {
        id: id,
        name: name,
        extension: extension,
        email:email,
        department:department
    };


    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = e.target.parentElement.parentElement.rowIndex;
             // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1);
            // BUILD THE GRID
            buildGrid();
        }
    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    let tbody = empTable.querySelector('tbody');
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = '';
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    employees.forEach((employee) => {
        // REBUILDING THE ROW STRUCTURE
        let row = tbody.insertRow();
        let cellId = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellExt = row.insertCell(2);
        let cellEmail = row.insertCell(3);
        let cellDepartment = row.insertCell(4);
        let cellDelete = row.insertCell(5);

        // BIND THE VALUES TO THE CELLS
        cellId.innerHTML = employee.id;
        cellName.innerHTML = employee.name;
        cellExt.innerHTML = employee.extension;
        cellEmail.innerHTML = employee.email;
        cellDepartment.innerHTML = employee.department;
        cellDelete.innerHTML = '<button class="btn btn-sm btn-danger delete">X</button>';
    });

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    document.getElementById('empCount').innerText = `(${employees.length})`;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};




