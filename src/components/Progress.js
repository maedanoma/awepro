import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import { SmallMessage } from './text/Text'

/**
 * 下にメッセージがついたプログレスバー
 */
export class ProgressBar extends Component {
    /**
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
                    style={[{ justifyContent: 'center', alignItems: 'center',}]}/> 
                <SmallMessage>{this.props.children}</SmallMessage>
            </View>
        )
    }
}