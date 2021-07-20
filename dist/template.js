const fs = require('fs')
const { membersM, membersE, membersI } = require('../index.js')
// import membersM from './index.js'
// import membersE from './index.js'
// import membersI from './index.js'


console.log(membersM)
console.log(membersE)
console.log(membersI)

displayRoster()

function displayRoster() {
    displayM()
    displayE()
    displayI()
}

function createCard(p_role, p_index) {

    const headingType = '';
    const role = '';
    const detail = '';

    switch (p_role) {
        case 'Manager':
            headingType = 'headingM'
            role = 'Manager'
            detail = 'officeNum'
            break;

        case 'Engineer':
            headingType = 'headingE'
            role = 'Engineer'
            detail = 'githubUsername'
            break;

        case 'Intern':
            headingType = 'headingI'
            role = 'Intern'
            detail = iMembers[p_index].school
            console.log(iMembers[p_index].school)
            break;

        default: return;
    }

    const cardSheetEl = document.createElement('section')
        const cardEl = document.createElement('article')
                const headingEl = document.createElement('div')
                const nameEl = document.createElement('name')
        const titleEl = document.createElement('title')
        const contentEl = document.createElement('div')
                const info1El = document.createElement('p')
                const info2El = document.createElement('p')
                const info3El = document.createElement('p')

    cardSheetEl.classList.add('sheet')
        cardEl.classList.add('card')
            headingEl.classList.add(headingType)
                nameEl.classList.add('name')
                titleEl.classList.add('title')
            contentEl.classList.add('content')
                info1El.classList.add('info1')
                info2El.classList.add('info2')
                info3El.classList.add('info3')

    cardSheetEl.innerText = role
        //no innerText for class card
            //no innerText for class heading        
                nameEl.innerText = { fullName }
                titleEl.innerText = { title }
            //no innerText for class content    
                info1El.innerText = { idNum }
                info2El.innerText = { eMail }
                info3El.innerText = { detail }

    body.append(cardSheetEl)
        cardSheetEl.append(cardEl)
            cardEl.append(headingEl)
                headingEl.append(nameEl)
                headingEl.append(titleEl)
            cardEl.append(contentEl)
                contentEl.append(info1El)
                contentEl.append(info2El)
                contentEl.append(info3El)
    }

function displayM() {

    for (var i = 0; i < membersM.length; i++) {
        if (i === mMembers - 1 || i === eMembers - 1 || i === iMembers - 1)
            createCard()

    }
}

function displayE() {

    for (var i = 0; i < membersE.length; i++) {
        if (i === mMembers - 1 || i === eMembers - 1 || i === iMembers - 1)
            createCard()
    }
}

function displayI() {

    for (var i = 0; i < membersI.length; i++) {
        if (i === mMembers - 1 || i === eMembers - 1 || i === iMembers - 1)
            createCard()
    }
}