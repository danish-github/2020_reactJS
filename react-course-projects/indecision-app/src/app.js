console.log("app is running");

const app = {
    title: ' some title',
    subtitle: ' this is my subtitle' ,
    options : ['one', 'two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p> subtitle {app.subtitle} </p>}
        { app.options.length > 0 ? "here are options"  : 'no options'}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div> 
);

const user = {
     name: 'andrew',
     age:26,
     location:'phila'
     
}

function getLocation(location){
    if (location) {
        return <p>localtion : {location}</p> ;
    } 
    
}


const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous' }</h1>
        {(user.age && user.age > 18 ) && <p> Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
)

const appRoot= document.getElementById('app');

ReactDOM.render(template,appRoot);