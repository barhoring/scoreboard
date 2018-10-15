const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = ({id, name, handleRemove}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" type="submit" onClick={() => handleRemove(id)}>✖</button>
        {name}
      </span>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {

  state = {
    score: 0
  };
  
  incrementScore = () => {
    this.setState(prevState => ({
        score: prevState.score + 1
      }));
  };
 
  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class App extends React.Component {

  state = {
    players:  [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemove = (id) => {
    console.log('removing id: ', id);
    this.setState(prevState => 
      ({
        players: prevState.players.filter(p => p.id !== id)
      })
    );
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {/* Player's list */}
        {this.state.players.map(player => (
          <div>
            <Player
              name={player.name}
              key={player.id.toString()}
              id={player.id}
              handleRemove={this.handleRemove}
            />
          </div>
        ))}
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
