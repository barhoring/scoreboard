const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats" >Players: 1</span>
    </header>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Bar
      </span>

      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score"></span>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
};



ReactDOM.render(
  <Header />,
  document.getElementById('root')
);