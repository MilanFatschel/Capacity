import React from "react";

import { Dimensions, StyleSheet, View, Text, Image, TouchableOpacity  } from "react-native";

const { width, height } = Dimensions.get('screen')

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    };
  }

  async componentDidMount() {
  }

  onImagePress = () => {
    this.props.navigation.navigate('ProfileScreen', {
        navigation: this.props.navigation
        })
  }

  render() {
    const styles = StyleSheet.create({
        touchableContainer: {
            width: width * 0.95,
           alignSelf: 'center',
          height: height * 0.15,
           position: 'absolute',
          bottom: height * 0.05,
            alignItems: 'center',
            justifyContent: 'center'
          },
      });

    return (
      <TouchableOpacity style={styles.touchableContainer}
      onPress={this.onImagePress}>
      <Image
        source={{ uri: this.props.destination && this.props.destination.image_url }}
        style={{
        flex: 1,
        width: width * 0.95,
        alignSelf: 'center',
        height: height * 0.15,
        position: 'absolute',
        bottom: height * 0.05
        }}
      />
      </TouchableOpacity>
    );
  }
}