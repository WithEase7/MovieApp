import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import {getMovie} from '../services/api_store';
import StarRating from 'react-native-star-rating';
import {Rating} from 'react-native-ratings';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';

const placeholderImage = require('../assets/images/placeholder.png');

const height = Dimensions.get('screen').height;

const Details = ({route}) => {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieId)
      .then(res => {
        setMovieDetail(res);
        setLoaded(true);
      })
      .catch(err => setError(err));
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <React.Fragment>
      {loaded && (
        <View>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={
                movieDetail.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetail.poster_path,
                    }
                  : placeholderImage
              }
            />

            <View style={styles.container}>
              <View style={styles.playButton}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text style={styles.movieTitle}>{movieDetail.title}</Text>
              {movieDetail.genres && (
                <View style={styles.genreContainer}>
                  {movieDetail.genres.map(genre => {
                    return (
                      <Text style={styles.genre} key={genre.id}>
                        {genre.name}
                      </Text>
                    );
                  })}
                </View>
              )}
              {/* <StarRating
              disabled={true}
              maxStars={5}
              starSize={30}
              rating={movieDetail.vote_average / 2}
            /> */}

              <Rating
                type="star"
                ratingColor="gold"
                imageSize={25}
                readonly={true}
                startingValue={movieDetail.vote_average / 2}
                style={styles.rating}
              />

              <Text style={styles.overview}>{movieDetail.overview}</Text>
              <Text style={styles.release}>
                {'Release Date: ' +
                  dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>

          <Modal animationType="slide" visible={modalVisible}>
            <Pressable style={styles.modal} onPress={() => videoShown()}>
              <Text>Hello Modal</Text>
            </Pressable>
           
            ;
          </Modal>
        </View>
      )}

      {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  image: {
    height: height / 2,
  },
  movieTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
  },
  genreContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  genre: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  rating: {
    marginVertical: 20,
  },
  overview: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  release: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginVertical: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
