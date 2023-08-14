import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser}</h1> }
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste javaScript</h2>
        <UserClass name={"Ankit Singh (class)"} location={"Noida"} />
      </div>
    );
  }
}

export default About;
