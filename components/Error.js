import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  error1: PropTypes.string,
  error2: PropTypes.string,
};

const defaultProps = {
  error1: 'Oops! Something went wrong.',
  error2: 'Make sure you are online and restart your app.',
};
class Error extends React.PureComponent {
  render() {
    const {error1, error2} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{error1}</Text>
        <Text style={styles.text}>{error2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
});

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
