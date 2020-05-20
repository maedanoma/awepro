import React from 'react';
import { observable, action } from 'mobx'
import { DimWidth } from '../../../components/Layout'

const open = DimWidth * 0.6
const close = 0

class ToggleMenuStore {
    @observable leftPosition = close

    @action.bound openMenu() {
        this.leftPosition = open
    }

    @action.bound closeMenu() {
        this.isDisplayMenu = close
    }

    @action.bound toggleMenu() {
        console.log("befor toggleMenu = " + this.leftPosition)
        this.leftPosition == close?
            this.leftPosition = open: this.leftPosition = close
        console.log("after toggleMenu = " + this.leftPosition)
    }
}

const toggleMenu = new ToggleMenuStore()
const ToggleMenuContext = React.createContext(toggleMenu)
export default ToggleMenuContext