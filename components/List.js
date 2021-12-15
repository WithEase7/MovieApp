import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Card from './Card';

class List extends React.PureComponent {
  //PureComponents do not re-renders when the value of state and props has been updated with the same values.
  render() {
    const {navigation, title, content} = this.props;
    return (
      <View>
        <View style={styles.list}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={content}
            renderItem={({item}) => (
              <Card navigation={navigation} item={item} />
            )}></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  list: {
    marginTop: 40,
  },
});

export default List;
