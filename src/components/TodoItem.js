import React, { Component } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class TodoItem extends Component {
    
    state = {
        completed: false
    }

    toggleTodo = () => {
        this.props.updateTodo(this.props.item.id, !this.props.item.completed)
        this.setState({ completed: !this.state.completed })
    }

    render() {
        const item = this.props.item
        return (
            <TouchableOpacity
            style={styles.itemButton}
             onPress={this.toggleTodo}>
                <Text style={[styles.item, {opacity: (this.state.completed ? 0.5 : 1)},
                {textDecorationLine: (item.completed ? 'line-through': 'none')}
                ]}>{item.task}</Text> 
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10
    },
    itemButton: {
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
  });
