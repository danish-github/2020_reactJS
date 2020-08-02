console.log( "app is running");


const app = {
    title : 'Indecision app',
    subtitle: 'put your life in hands of computer',
    options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value ='';
        render();
    }

};


const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1> {app.title}</h1>
            { app.subtitle && <p> subtitle : { app.subtitle}</p>}
            {app.options.length > 0 ? 'Here are options' : 'no options'}
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>RemoveAll</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>option:{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Option</button>
                
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();