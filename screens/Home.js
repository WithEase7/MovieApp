import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getLatestMovies,
  getFamilyMovies,
  getPopularTVShows,
  getRomanticMovies,
} from '../services/api_store';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';

const dimensions = Dimensions.get('screen');

function Home({navigation}) {
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState('');
  const [topRatedMovies, setTopRatedMovies] = useState('');
  const [familyMovies, setFamilyMovies] = useState('');
  const [popularTVShows, setPopularTVShows] = useState('');
  const [romanticMovies, setRomanticMovies] = useState('');

  const [error, setError] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getTopRatedMovies(),
      getFamilyMovies(),
      getPopularTVShows(),
      getRomanticMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMovies,
          popularMovies,
          topRatedMovies,
          familyMovies,
          popularTVShows,
          romanticMovies,
        ]) => {
          const moviesImagesArray = [];
          upcomingMovies.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMovies);
          setTopRatedMovies(topRatedMovies);
          setFamilyMovies(familyMovies);
          setPopularTVShows(popularTVShows);
          setRomanticMovies(romanticMovies);
          setLoaded(true);
        },
      )
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          <View style={styles.silderContainer}>
            <SliderBox
              images={moviesImages}
              dotStyle={{height: 0}}
              sliderBoxHeight={dimensions.height / 1.4}
              autoplay={true}
              circleLoop={true}
            />
          </View>

          <View style={styles.carousel}>
            <List navigation={navigation} title="Popular Movies" content={popularMovies} />
          </View>

          <View style={styles.carousel}>
            <List navigation={navigation} title="Top-Rated Movies" content={topRatedMovies} />
          </View>

          <View style={styles.carousel}>
            <List navigation={navigation} title="Family Movies" content={familyMovies} />
          </View>

          <View style={styles.carousel}>
            <List navigation={navigation} title="Popular TV Shows" content={popularTVShows} />
          </View>

          <View style={styles.carousel}>
            <List navigation={navigation} title="Romantic Movies" content={romanticMovies} />
          </View>
        </ScrollView>
      )}

      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  silderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padded: 20,
  },
});
export default Home;
