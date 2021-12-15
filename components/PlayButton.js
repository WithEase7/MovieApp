import React from 'react';
import {Pressable, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const playImage = require('../assets/images/play.png');

class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        {/* <Image source={playImage} style={styles.image} /> */}
        <Icon name={"caret-forward-outline"} size={30} color={'white'}/>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#31d212',
    borderRadius: 50,
    // width: 50,
    padding: 10,
    alignContent: 'center'
  },
});
export default PlayButton;
