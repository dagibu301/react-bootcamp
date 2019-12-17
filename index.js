class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul"></Hello>
        <Hello to="Cher" from="Sonny"></Hello>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
