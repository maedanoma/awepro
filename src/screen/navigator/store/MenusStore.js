import React from 'react';
import { observable, action } from 'mobx'
import TeamNews from '../../teamNews/TeamNewsScreen'
import Members from '../../MembersScreen'

export const Menus = [
    { id: 0,　name: 'Home', component: <TeamNews/> },
    { id: 1,　name: 'Members', component: <Members/> },
    { id: 2,　name: 'News', component: <Members/> },
    { id: 3,　name: 'Other', component: <Members/> }
]

class MenuStore {
    @observable menu = Menus[0]

    @action.bound setMenu(menu) {
        this.menu = menu
    }
}

const menuStore = new MenuStore()
const MenuContext = React.createContext(menuStore)
export default MenuContext