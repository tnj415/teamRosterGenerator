const fs = require('fs')


module.exports = function displayTeam(employee) {

    if(employee != undefined){
    var tempKey = ``;
    var tempValue = ``;

    switch (employee.role) {
        case 'Manager':
            tempKey = `Office number: `;
            tempValue = employee.officeNumber;
            break;
        case 'Engineer':
            tempKey = `GitHub: `;
            tempValue = `<a href="https://github.com/${employee.github}">${employee.github}</a>`;
            break;
        case 'Intern':
            tempKey = `School: `;
            tempValue = employee.school;
            break;
    }

    const htmlPageContent =

        `<section class="sheet">
        <article class="card">
            <div class="${employee.role}">
                <h3 class="name">Name: ${employee.name}</h3>
                <p class="role">Role: ${employee.role}</p>
            </div>
            <div class="content">
                <p class="info1">ID Number: ${employee.id}</p>
                <p class="info2">Email: ${employee.email}</p>
                <p class="info2">${tempKey}: ${employee.tempValue}</p>
               
            </div>
        </article>
    </section>`

    fs.appendFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
    }

}
