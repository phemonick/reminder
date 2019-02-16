
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import TodoList from './src/components/TodoList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TodoList />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
