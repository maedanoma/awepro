import {
    Animated,
    Easing,
} from 'react-native';
import PropTypes from 'prop-types'

export const StartTimingAnimation = propsArray => {
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

StartTimingAnimation.propTypes = {
    value: PropTypes.object.isRequired,
    toValue: PropTypes.number.isRequired,
    duration: PropTypes.number,
    easing: PropTypes.object,
    delay: PropTypes.number,
    postAction: PropTypes.object,
}
StartTimingAnimation.defaultProps = {
    duration: 500,
    easing: Easing.quad,
    delay: 0,
    postAction: () => {}
}

export const StopAnimation = (values) => {
    values.forEach(value => {
        Animated.timing(value).stop()    
    })
}