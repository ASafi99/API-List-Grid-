/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/

async function getAPIs() {
    let data = await fetch('https://api.publicapis.org/entries')
    let res = await data.json()
    return res
    
}

function getAPIhtml(myAPI) {
    console.log(myAPI)
    return `<div class = "my-api">
    <div class= "my-api-name">Name: <a href='${myAPI.Link}'>${myAPI.API} (${myAPI.Category})</a></div>
    <div class= "my-api-description">Description: ${myAPI.Description}</div>
    <div class= "my-api-auth">Auth: ${myAPI.Auth ? myAPI.Auth: "None"}</div>
    <div class= "my-api-https">HTTPS Support: ${myAPI.HTTPS}</div>
    </div>
    `
}

function displayAPIs(myAPIs) {
    let APIs = myAPIs.entries.slice(0,100)
    console.log(APIs)
   
        document.body.innerHTML = `<div class = "my-apis">
        ${APIs.map((api,i) => getAPIhtml(api))}
        </div>`
}

getAPIs()
    .then(displayAPIs)
    .catch(e => console.log(`Error: ${e}`))