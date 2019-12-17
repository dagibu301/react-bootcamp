class Hello extends React.Component {
  render() {

    console.log(this.props);

    return (
      <div>
        <h1>
          Hello {this.props.to} from {this.props.from}
        </h1>
      </div>
    );
  }
}
