import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native'
import { DimHeight, DimWidth } from '../Layout'
import PropTypes from 'prop-types'
import LoadingBar from '../LoadingBar'

export default class CardList extends Component {
    static propTypes = {
        contents: PropTypes.array.isRequired,
        initialCardPosition: PropTypes.number,
        horizontal: PropTypes.bool,
        // スクロール幅、horizontal:trueのときに必要
        cardWidth: PropTypes.number,
        // スクロール幅、horizontal:falseのときに必要
        cardHeight: PropTypes.number,
        snapToAlignment: PropTypes.string,
        scrollEnabled: PropTypes.bool
    }
    static defaultProps = {
        initialCardPosition: 0,
        cardWidth: 0,
        cardHeight: 0,
        scrollEnabled: true,
        horizontal: false
    }
    _onContentSizeChange() {
        let x = this.props.initialCardPosition * this.props.cardWidth
        let y = this.props.initialCardPosition * this.props.cardHeight
        this.scrollView.scrollTo({ x, y, animated: false });
    }
    render() {
        let interval = this.props.horizontal ?
            this.props.cardWidth : this.props.cardHeight
        return (
            <View >{
                this.props.contents.length == 0 ?
                    <View style={styles.loadingArea}>
                        <LoadingBar isFailed={this.props.contents==null} />
                    </View> :
                    <ScrollView
                        style={[{backgroundColor: '#333333'}]}
                        {...this.props.props}
                        horizontal={this.props.horizontal}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0}
                        scrollEnabled={this.props.scrollEnabled}
                        snapToInterval={interval}
                        snapToAlignment='top'
                        ref={scrollView => this.scrollView = scrollView}
                        onContentSizeChange={this._onContentSizeChange.bind(this)}>
                        {this.props.children}
                    </ScrollView>
            }</View>
        )
    }
}

const styles = StyleSheet.create({
    loadingArea: {
        height: DimHeight * 0.23 - 25,
        width: DimWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333'
    },
})