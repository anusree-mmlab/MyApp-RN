import React from 'react';
import { StyleSheet, Text, View, TextInput, ListView, Button } from 'react-native';

export default class App extends React.Component {
   ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  state = {
    placeName : '',
    placeList : [],
    placeListView : this.ds.cloneWithRows(['row 1', 'row 2']),
  }

  onButtonPressHandler = (event) => {
    const currentPlaceList = [...this.state.placeList];

    if(this.state.placeName) {
      currentPlaceList.push(this.state.placeName);
    }


    this.setState({
      placeList: currentPlaceList,
      placeListView: this.ds.cloneWithRows(currentPlaceList)
    });



    this.setState({placeName : ''})
  }

  render() {
    return (
      <View style={styles.container}>
 
        <TextInput
          style={{height: 40, width: 140, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({placeName : text})}
          value={this.state.text}
        />

        <Button
          onPress={this.onButtonPressHandler}
          title="Save"
          color="#841584"
          accessibilityLabel="Save Place!"
        />

        <ListView
          dataSource={this.state.placeListView}
          renderRow={(rowData) => <Text>{rowData}</Text>}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding:100,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
    
  },
});
