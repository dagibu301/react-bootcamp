class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Random></Random>
        <NumPicker></NumPicker>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
