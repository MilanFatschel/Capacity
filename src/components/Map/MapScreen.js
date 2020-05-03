import React from "react";

import Map from "./Map";

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <Map navigation={this.props.navigation}></Map>;
  }
}
