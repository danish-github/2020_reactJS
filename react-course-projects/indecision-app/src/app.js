console.log("app is running");

var template = (
    <div>
        <h1>indecision app</h1>
        <p>some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div> 
);

var appRoot= document.getElementById('app');

ReactDOM.render(template,appRoot);