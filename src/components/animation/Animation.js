import {
    Animated,
    Easing,
} from 'react-native';
import PropTypes from 'prop-types'

export const initializeAnimation = value => new Animated.Value(value)

export const startTimingAnimation = propsArray => {
    propsArray.forEach(props => {
        Animated.timing(props.value, {
            toValue: props.toValue,
            duration: props.duration,
            easing: props.easing,
            delay: props.delay,
            useNativeDriver: false
        }).start(props.postAction)
    })
}

startTimingAnimation.propTypes = {
    value: PropTypes.object.isRequired,
    toValue: PropTypes.number.isRequired,
    duration: PropTypes.number,
    easing: PropTypes.object,
    delay: PropTypes.number,
    postAction: PropTypes.object,
}
startTimingAnimation.defaultProps = {
    duration: 500,
    easing: Easing.quad,
    delay: 0,
    postAction: () => {}
}

export const stopAnimation = valueArray => 
    valueArray.forEach(value => Animated.timing(value).stop())