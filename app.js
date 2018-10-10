const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats" >Players: { props.totalPlayers }</span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        Bar
      </span>
      <Counter />
      
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">27</span>
        <button className="counter-action increment"> + </button>
      </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />
      {/* Player's list */}
      <Player />
    </div>
  );
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);