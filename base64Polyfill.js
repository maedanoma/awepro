import {decode, encode} from 'base-64'

export default initBase64 = () => {
    if (!global.btoa) {
        global.btoa = encode;
    }
    if (!global.atob) {
        global.atob = decode;
    }
}
