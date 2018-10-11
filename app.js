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
        {props.name}
      </span>
      <Counter score={props.score} />
      
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />
      {/* Player's list */}
      <Player name="bar" score={100} />
      <Player name="liz" score={200} />
      <Player name="parsik" score={120} />
      <Player name="sisi" score={75} />
      <Player name="luli" score={85} />
    </div>
  );
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);