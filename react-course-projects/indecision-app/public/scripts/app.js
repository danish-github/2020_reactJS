'use strict';

console.log("app is running");

var app = {
    title: 'Indecision app',
    subtitle: 'put your life in hands of computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            ' subtitle : ',
            app.subtitle
        ),
        app.options.length > 0 ? 'Here are options' : 'no options',
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'RemoveAll'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'option:',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
