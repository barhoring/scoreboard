const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title.'},
  'Hello world!'
);

const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a react node and render it tp the dom'
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
)



ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);
