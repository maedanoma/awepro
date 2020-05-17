import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types'
import LoadingBar from '../LoadingBar'

const DimHeight = Dimensions.get('screen').height
const DimWidth = Dimensions.get('screen').width

const CardList = props => {
    return (
        <View>{
            props.contents.length == 0?
                <View style={styles.loadingArea}>
                    <LoadingBar isFailed={props.isFailed} />
                </View>:
                <CardScrollView
                    initialCardPosition={props.initCardPos}
                    horizontal={props.horizontal}
                    cardWidth={props.cardWidth}
                    cardHeight={props.cardHeight}
                    cardAlign={props.cardAlign}>
                    {props.children}
                </CardScrollView>
        }</View>
    )
}

CardList.propTypes = {
    isFailed: PropTypes.bool.isRequired,
    initCardPos: PropTypes.number,
    horizontal: PropTypes.bool,
    cardWidth: PropTypes.number,
    cardHeight: PropTypes.number,
    cardAlign: PropTypes.string
}
CardList.defaultProps = {
    // CardScrollView参照
}

export default CardList;

class CardScrollView extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        initialCardPosition: PropTypes.number,
        horizontal: PropTypes.bool,
        // スクロール幅、horizontal:trueのときに必要
        cardWidth: PropTypes.number,
        // スクロール幅、horizontal:falseのときに必要
        cardHeight: PropTypes.number,
        cardAlign: PropTypes.string
    }
    static defaultProps = {
        initialCardPosition: 0,
        horizontal: false,
        cardWidth: 0,
        cardHeight: 0,
        cardAlign: 'top',
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
            <ScrollView
                horizontal={this.props.horizontal}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToInterval={interval}
                snapToAlignment={this.props.cardAlign}
                ref={scrollView => this.scrollView = scrollView}
                onContentSizeChange={this._onContentSizeChange.bind(this)}>
                {this.props.children}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    loadingArea: {
        height: DimHeight * 0.23 - 25,
        width: DimWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        height: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004095',
        textAlign: 'center'
    },
})

