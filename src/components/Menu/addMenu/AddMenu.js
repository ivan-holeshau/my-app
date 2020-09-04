import React, { Component } from 'react'
import './style.css'
import { AddContect } from '../../Panel/Panel'
class AddMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(event) {
        const name = event.target.name;
        this.setState({ [`${name}`]: event.target.value })
    }

    render() {
        return (
            <div className='addMenu'>
                <input name='name' value={this.state.name} type='text' onChange={this.onChangeHandler} placeholder='name car'></input>
                <input name='price' value={this.state.price} type='text' onChange={this.onChangeHandler} placeholder='price'></input>
                <AddContect.Consumer>
                    {(objContect) => <button onClick={objContect.add(this)}>add</button>}
                </AddContect.Consumer>
            </div>
        )
    }
}

export default AddMenu;