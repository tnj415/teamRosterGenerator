const fs = require('fs')

function end () {

    const htmlPageContent = 
    
    `</body>
    </html>`

    fs.appendFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
);
   
}

module.exports = end;