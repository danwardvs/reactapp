import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world! 88</Text>

        <Button
          title="Press this button"
          onPress={this._handlePress}
        />
        
      </View>
    );
  }
  _handlePress(event) {
    console.log('Pressed!');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
