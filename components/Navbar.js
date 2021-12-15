import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

class Navbar extends React.PureComponent {
    render() {
        const {navigation, main} = this.props;
        return (
            <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}
              >
              <Icon name={'search-outline'} size={30} color={'#fff'} style={{marginRight: 10,}}/>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={40} color={'#fff'} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
          );
    }
}


const styles = StyleSheet.create({
  mainNav: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center'
  },
  logo: {
    marginLeft: 5,
  }
});

export default Navbar;
