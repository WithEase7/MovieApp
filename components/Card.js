import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/images/placeholder.png');

const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {navigation, item} = this.props;
    
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {movieId: item.id})}
        style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {!item.poster_path && <Text style={styles.title}>{item.title}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 125,
    borderRadius: 20,
  },
  title: {
    position: 'absolute',
    padding: 5,
    textAlign: 'center',
    top: 10,
  },
});

Card.propTypes = propTypes;
export default Card;
