const title = <h1>Hello world!</h1>;
const desc = <p>I just learned how to create a react node and render it tp the dom</p>;

const header = React.createElement(
  'header',
  null,
  title,
  desc
);





ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);
