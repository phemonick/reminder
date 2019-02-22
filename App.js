
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import TodoList from './src/components/TodoList';
import About from './src/components/About';
import AddTodo from './src/components/AddTodo';

const TabNav = createBottomTabNavigator({
  TodoNav: { screen: TodoList},
  About: { screen: About}
}, {
  mode: 'modal'
});

const stackNav = createStackNavigator({
  TodoList: {screen: TabNav},
  AddTodo: { screen: AddTodo}
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <TodoList />
    );
  }
}

export default createAppContainer(stackNav);
