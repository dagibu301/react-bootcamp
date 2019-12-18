class App extends React.Component {
  render() {
    return (
      <div>
        <Machine s1="🍇" s2="🍊" s3="🍇"></Machine>
        <Machine s1="🍇" s2="🍇" s3="🍇"></Machine>
        <Machine s1="🍊" s2="🍊" s3="🍇"></Machine>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
