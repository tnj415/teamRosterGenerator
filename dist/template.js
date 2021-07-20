const fs = require('fs')
const module = require('./index.js')
const memberData = module.roster
const mMembers = require('./index.js')
const eMembers = require('./index.js')
const iMembers = require('./index.js')

function createCard(memberData) {

    for (var i = 0; i < memberData.length; i++) {
        if (i === mMembers - 1 || i === eMembers - 1 || i === iMembers - 1)
            body.append(div)

        const cardEl = document.createElement('section')
        const headingEl = document.createElement('article')
        const nameEl = document.createElement('name')
        const titleEl = document.createElement('title')
        const contentEl = document.createElement('article')
        const info1El = document.createElement('p')
        const info2El = document.createElement('p')
        // const info3El = document.createElement('p')

        cardEl.classList.add('card')
        headingEl.classList.add('heading')
        nameEl.classList.add('name')
        contentEl.classList.add('content')
        info1El.classList.add('info1')
        info2El.classList.add('info2')
        info3El.classList.add('info3')

        nameEl.innerText = {fullName}
        headingEl.innerText = {title}
        info1El.innerText = {idNum}
        info2El.innerText = {eMail}
        // info3El.innerText = {misc}
    }

}