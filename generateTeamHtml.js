
function generateTeamCards(team) {

    let html = ''

    // removed manager from first index
    team.shift()

    console.log('team to generate', team)

    team.forEach(tm => {
        if (tm.getRole() === 'Engineer') {

            html = html + `
            
            <div class='col-sm-3'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Engineer</h5>
                        <h4> ${tm.getName()}</h4>
                        <ul>
                            <li>ID: ${tm.getId()} </li>
                            <li>Email: ${tm.getEmail()} </li>
                            <li>Github: ${tm.getGithub()} </li>
                        </ul>
                    </div>
                </div>
            </div>`

        }

        if (tm.getRole() === 'Intern') {

            html = html + `

            <div class='col-sm-3'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Intern</h5>
                        <h4> ${tm.getName()}</h4>
                        <ul>
                            <li>ID: ${tm.getId()} </li>
                            <li>Email: ${tm.getEmail()} </li>
                            <li>School: ${tm.getSchool()} </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            `
        }
        
    });


    return html 

}

function generateTeamHtml(team) {
    
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    
    <body>
        <h1>My Team</h1>
        <div class='row row-one'>
            <div class='col-sm-3'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Manager</h5>
                        <h4>${team[0].getName()}</h4>
                        <ul>
                            <li>ID: ${team[0].getId()}</li>
                            <li>Email: ${team[0].getEmail()}</li>
                            <li>Office Number: ${team[0].getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            ${generateTeamCards(team)}
        </div>
    </body>
    
    </html>
    
    `
}

module.exports = generateTeamHtml