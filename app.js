const desc = 'I just learned how to create a react node and render it tp the dom';
const myTitleID ='main-title';
const name = 'Bar';
const header = (
  <header>
    <h1 id={myTitleID}>{ name }'s 100 React element</h1>
    <p className="main-desc">{ desc }</p>
    <input value={10*20} />
  </header>
);





ReactDOM.render(
  header,
  document.getElementById('root')
);