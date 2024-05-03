document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de barras 1
    const ctx1 = document.getElementById('bar-chart-1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de barras 2
    const ctx2 = document.getElementById('bar-chart-2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico circular 1
    const ctx3 = document.getElementById('pie-chart-1').getContext('2d');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['red', 'blue', 'yellow']
            }]
        }
    });

    // Gráfico circular 2
    const ctx4 = document.getElementById('pie-chart-2').getContext('2d');
    new Chart(ctx4, {
        type: 'pie',
        data: {
            labels: ['Green', 'Purple', 'Orange'],
            datasets: [{
                data: [200, 100, 150],
                backgroundColor: ['green', 'purple', 'orange']
            }]
        }
    });

    // Gráfico promedio grado 3
    const ctx5 = document.getElementById('ranking-chart-2').getContext('2d');
    new Chart(ctx5, {
        type: 'pie',
        data: {
            labels: ['Green', 'Purple', 'Orange'],
            datasets: [{
                data: [200, 100, 150],
                backgroundColor: ['green', 'purple', 'orange']
            }]
        }
    });

    // Gráfico promedio grado 4
    const ctx6 = document.getElementById('ranking-chart-3').getContext('2d');
    new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: ['Green', 'Purple', 'Orange'],
            datasets: [{
                data: [200, 100, 150],
                backgroundColor: ['green', 'skyblue', 'orange']
            }]
        }
    });

    // Gráfico promedio grado 5
    const ctx7 = document.getElementById('ranking-chart-4').getContext('2d');
    new Chart(ctx7, {
        type: 'pie',
        data: {
            labels: ['Green', 'Purple', 'Orange'],
            datasets: [{
                data: [200, 100, 150],
                backgroundColor: ['green', 'gold', 'orange']
            }]
        }
    });
});


//estudiantes activos 
document.addEventListener('DOMContentLoaded', function() {
    const activeStudentsList = document.getElementById('active-students');

    const students = [
        { nombre: 'Estudiante 1', estado: 'activo' },
        { nombre: 'Estudiante 2', estado: 'inactivo' },
        { nombre: 'Estudiante 3', estado: 'activo' },
        { nombre: 'Estudiante 5', estado: 'activo' },
        { nombre: 'Estudiante 6', estado: 'activo' },
        { nombre: 'Estudiante 7', estado: 'inactivo' },
        { nombre: 'Estudiante 8', estado: 'activo' },
        { nombre: 'Estudiante 9', estado: 'activo' },

    ];

    //  lista de estudiantes y agregar alumnos
    students.forEach(function(student) {
        const listItem = document.createElement('li');
        listItem.textContent = student.nombre;
        
        if (student.estado === 'activo') {
            listItem.style.color = 'green'; // estudiantes activos
        } else {
            listItem.style.color = 'red'; // estudiantes inactivos
        }
        
        activeStudentsList.appendChild(listItem);
    });

    
});
