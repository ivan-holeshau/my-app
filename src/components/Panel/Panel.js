import React, { Component } from 'react'
import Card from './itemCard/Card'
import './style.css'
import Menu from '../Menu/Menu';
export const AddContect = React.createContext({ search: '', add: {} })


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            search: ''
        }

    }

    onDeleteHandler(index) {
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({ list: list })
    }

    addListHandler(event) {
        if (Number.parseInt(event.state.price)) {
            console.log(event)
            const item = { name: event.state.name ? event.state.name : 'no name', price: event.state.price };
            const list = this.state.list;
            list.push(item);
            this.setState({ list })
            event.state.name = "";
            event.state.price = "";
        }
        else {
            alert('price is not number')
        }
    }

    onChangeHandle(event) {
        this.setState({ search: event.target.value })
    }

    onChangeHandleSearch(event) {
        this.setState({ search: event.target.value })
    }

    render() {
        return (

            <div className='panel'>
                <AddContect.Provider value={{
                    search: this.state.search,
                    add: (name, price) => this.addListHandler.bind(this, name, price),
                    onChangeHandle: (ev) => this.onChangeHandleSearch.bind(this, ev)()
                }}>
                    <Menu />
                    {this.state.list.filter((item) => {
                        return item.name.indexOf(this.state.search) > -1 || item.price.indexOf(this.state.search) > -1

                    }).map((item, index) => {
                        return <Card key={item.name + item.price + index} name={item.name} price={item.price} onDelete={((el) => this.onDeleteHandler.bind(this, el))} index={index} />
                    })}
                </AddContect.Provider>
            </div>

        )
    }
}

export default Panel;