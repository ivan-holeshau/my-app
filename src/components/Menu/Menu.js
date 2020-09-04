import React, { Component } from 'react'
import AddMenu from './addMenu/AddMenu'
import Search from './searchMenu/search'
import PropTypes from 'prop-types';
class Menu extends Component {
    render() {
        return (
            <div>
                <AddMenu />
                <Search />
            </div>
        )
    }
}

Menu.propTypes = {
    add: PropTypes.func,
    onChangeHandle: PropTypes.func,

}

export default Menu;