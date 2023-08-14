import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      // count : 0,
      userInfo: {
        name: "Dummy",
        location: "Default"
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo:json
    })
  }

  render() {
    // const {name, location} = this.props;
    // const {count} = this.state;

    const {name, location, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
      <img src={avatar_url} alt="" />
      <h2>Name: {this.state.userInfo.name}</h2>
        {/* <h2>count: {count}</h2> */}
        {/* <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }}>Count Increase</button> */}
        {/* <h2>Name: {name}</h2> */}
        <h3>Location:{location}</h3>
        <h3>Github Link: ankitkumar0111</h3>
      </div>
    );
  }
}

export default UserClass;
