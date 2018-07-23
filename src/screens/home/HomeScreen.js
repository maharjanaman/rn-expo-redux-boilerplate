import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles/HomeScreen";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.flexContainer}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
