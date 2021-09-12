{/* <div class='col-sm-3'>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Employee Name</h5>
            <h4>Employee Role</h4>
            <ul>
                <li>placehold</li>
                <li>placehold</li>
                <li>placehold</li>
            </ul>
        </div>
    </div>
</div> */}

module.exports = function(team) {
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
                        <h4>${team[0].name}</h4>
                        <ul>
                            <li>${team[0].id}</li>
                            <li>${team[0].email}</li>
                            <li>${team[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            ${renderEmployeeCards}
        </div>
    </body>
    
    </html>
    
    `
}