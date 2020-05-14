import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types'
import { ProgressBar } from '../components/Progress'

export class CardScrollViewWrapper extends Component {
    /**
     * @param props.onPressEachCard         Cardが押下された時の動作
     * @param props.title                   タイトル
     * @param props.horizontal              横スクロールにするかどうか(e.g. true→横スクロール)
     * @param props.cardWidth               各カードの横幅
     * @param props.cardHeight              各カードの縦幅 
     * @param props.cardAlign               スクロール後の対象カードの配置(e.g. left)
     * @param props.contents                Cardに表示するコンテンツ
     * @param props.initCardPos             デフォルトのCardの位置
     * @param props.isDisplayError          エラーを表示するかどうか
     */
    constructor(props) {
        super(props)
    }
    static propTypes = {
        initCardPos: PropTypes.number,
        horizontal: PropTypes.bool,
        cardWidth: PropTypes.number,
        cardHeight: PropTypes.number,
        cardAlign: PropTypes.string
    }
    static defaultProps = {
        initCardPos: 0,
        horizontal: false,
        cardWidth: 0,
        cardHeight: 0,
        cardAlign: '',
    }
    render() {
        let contents = this.props.contents
        let loadingMessage = 'Fetching ' + this.props.title.toLowerCase() + '...'
        let errorMessage = 'Failed to fetch ' + this.props.title.toLowerCase()
        return (
            <View>
                <Text style={styles.titleText}>{this.props.title}</Text>
                {
                    contents.length != 0 ?
                        <CardScrollView
                            initialCardPosition={this.props.initCardPos}
                            horizontal={this.props.horizontal}
                            cardWidth={this.props.cardWidth}
                            cardHeight={this.props.cardHeight}
                            cardAlign={this.props.cardAlign}>
                            { this.props.children }
                        </CardScrollView>:
                        <View style={styles.loadingArea}>
                            {
                                !this.props.isDisplayError ?
                                    <ProgressBar message={loadingMessage} />:
                                    <Text style={[{
                                        textAlign: 'center',
                                        color: '#AAAAAA'}]}>{errorMessage}</Text>
                            }
                        </View>
                }
            </View>
        )
    }
} 


export class CardScrollView extends Component {
    /**
     * (Options)
     * @param props.initialCardPosition 最初に表示するカードの位置(e.g. 0~N)
     * @param props.horizontal          横スクロールにするかどうか(e.g. true→横スクロール)
     * @param props.cardWidth           各カードの横幅
     *                                  スクロールした時にこの横幅分スライドします
     *                                  horizontal:trueの時に発動する
     * @param props.cardHeight          各カードの縦幅 
     *                                  スクロールした時にこの縦幅スライドします
     *                                  horizontal:falseの時に発動する
     * @param props.cardAlign           スクロール後の対象カードの配置(e.g. left)
     */
    constructor(props) {
        super(props)
    }
    static propTypes = {
        initialCardPosition: PropTypes.number,
        horizontal: PropTypes.bool,
        cardWidth: PropTypes.number,
        cardHeight: PropTypes.number,
        cardAlign: PropTypes.string
    }
    static defaultProps = {
        initialCardPosition: 0,
        horizontal: false,
        cardWidth: 0,
        cardHeight: 0,
        cardAlign: '',
    }
    _onContentSizeChange() {
        let x = this.props.initialCardPosition * this.props.cardWidth
        let y = this.props.initialCardPosition * this.props.cardHeight
        this.scrollView.scrollTo({ x, y, animated: false });
    }
    render() {
        let interval = this.props.horizontal?
            this.props.cardWidth: this.props.cardHeight
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
        height: Dimensions.get('window').height * 0.23 - 25,
        width: Dimensions.get('window').width,
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