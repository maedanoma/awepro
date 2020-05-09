import React, { Component } from 'react';
import { ScrollView, } from 'react-native';
import PropTypes from 'prop-types'

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