import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';

import TodoItem from './TodoItem';

export default class TodoList extends Component {

    render() {
        const items = [
            "1. Goto the store",
            "2. Tell everyone to keep quiet",
            "3. Pray for them"
        ]
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Todo List
                </Text>
                <FlatList
                    data={items}
                    renderItem={(row) => {
                        return <TodoItem title={row.item} />
                    }}
                    style={styles.content}
                    keyExtractor={item => item}
                />
            </View>
        )
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
    content: {
        flex: 1,
        alignSelf: 'stretch'
    }
  });
  
