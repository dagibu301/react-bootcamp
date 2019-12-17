function getMood() {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class Random extends React.Component {
  render() {
    return (
      <div>
        <h1>My current Mood is: {getMood()}</h1>
      </div>
    );
  }
}


