import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
} from 'react-native';

/**
 * 下にメッセージがついたプログレスバー
 */
export class ProgressBar extends Component {
    /**
     * @param props.message     メッセージ
     * @param state.animating   プログレスバーのアニメーションするかどうか
     */
    constructor(props) {
        super(props)
        this.state = {
            animating: true
        }
    }

    componentWillUnmount() {
        this.setState({animating: false})
    }

    render() {
        return (
            <View>
                <ActivityIndicator
                    animating = {this.state.animating}
                    color = '#CCCCCC'
                    size = "large"
                    style={[{
                        justifyContent: 'center',
                        alignItems: 'center',}]}/> 
                <Text style={[{
                    textAlign: 'center',
                    color: '#AAAAAA'}]}>
                        {this.props.message}
                </Text>
            </View>
        )
    }
}