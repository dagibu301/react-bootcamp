class Machine extends React.Component {
  render() {
    const s1 = this.props.s1;
    const s2 = this.props.s2;
    const s3 = this.props.s3;
    let msg
    if( s1 === s2 && s1 === s3) {
        msg = <p>You win!!!</p>
    } else {
        msg = <p>You lose :(</p>
    }
    return (
      <div>
        <p>
          {s1} {s2} {s3}
        </p>
        {msg}
      </div>
    );
  }
}
