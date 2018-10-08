const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.'},
    'Hello world!'
);

ReactDOM.render(
    title,
    document.getElementById('root')
);

console.log(title);
