const tableBody = document.querySelector('.table-body');
const inputNombre = document.getElementById('inputNombre');
const inputSalario = document.getElementById('inputSalario');
const inputEdad = document.getElementById('inputEdad');
const btnAdd = document.querySelector('.btnAdd');

function sendRequest(method, url, id = null) {
    const req = new XMLHttpRequest();
    req.open(method, url);
    req.send();
    req.addEventListener('load', (event) => {
        console.log(event.target.responseText)
        const response = JSON.parse(event.target.responseText);
        switch (method) {
            case 'GET':
                pintarEmpleados(response.data);
                localStorage.setItem('employees', JSON.stringify(response.data));
                break;
            case 'DELETE':
                const trBorrar = document.querySelector(`tr[data-employee-id="${id}"]`);
                tableBody.removeChild(trBorrar);
                break;
            case 'POST':
                console.log(response);
                break;
        }
    });
}

function pintarEmpleados(arrEmpleados) {
    tableBody.innerHTML = '';
    for (let empleado of arrEmpleados) {
        // Creación de la fila
        const tr = document.createElement('tr');
        tr.dataset.employeeId = empleado.id;

        // Creación de las columnas
        const tdNombre = document.createElement('td');
        tdNombre.innerText = empleado.employee_name;
        const tdSalario = document.createElement('td');
        tdSalario.innerText = empleado.employee_salary;
        const tdEdad = document.createElement('td');
        tdEdad.innerText = empleado.employee_age;

        // Creación del botón de borrado
        const tdAcciones = document.createElement('td');
        const btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.className = 'btn btn-danger';
        btnDelete.dataset.employeeId = empleado.id;
        btnDelete.addEventListener('click', (event) => {
            const employee_id = event.target.dataset.employeeId;

            sendRequest('DELETE', `http://dummy.restapiexample.com/api/v1/delete/${employee_id}`, employee_id);
        });
        tdAcciones.appendChild(btnDelete);

        tr.appendChild(tdNombre);
        tr.appendChild(tdSalario);
        tr.appendChild(tdEdad);
        tr.appendChild(tdAcciones);

        tableBody.appendChild(tr);
    }
}

btnAdd.addEventListener('click', (event) => {
    sendRequest('POST', 'http://dummy.restapiexample.com/api/v1/employees');
});

if (localStorage.getItem('employees')) {
    const employees = JSON.parse(localStorage.getItem('employees'));
    pintarEmpleados(employees);
} else {
    sendRequest('GET', 'http://dummy.restapiexample.com/api/v1/employees');
}