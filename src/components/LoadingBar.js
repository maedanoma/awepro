import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import PropTypes from 'prop-types'
import { ProgressBar } from './Progress'
import { SmallMessage } from './text/Text';

const LoadingBar = props => {
    let height = props.height
    let width = props.width
    return (
        <View style={[styles.loading, { height, width }]}>
        {
            props.isFailed?
                <SmallMessage>{props.failedMessage}</SmallMessage>:
                <ProgressBar>{props.loadingMessage}</ProgressBar>
        }
        </View>
    )
}
LoadingBar.propTypes = {
    isFailed: PropTypes.bool.isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    loadingMessage: PropTypes.string,
    failedMessage: PropTypes.string,
}
LoadingBar.defaultProps = {
    height: '100%',
    width: '100%',
    loadingMessage: 'Fetching...',
    failedMessage: 'Failed to fetch'
}
export default LoadingBar;

const styles = StyleSheet.create({
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
