import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerTitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

export { Header };
