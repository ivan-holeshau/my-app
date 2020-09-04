import React, { Component } from 'react'
import './style.css'
import Radium from 'radium'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
        }
    }

    //момент изменения
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate ', nextProps, nextState)
        return true;
        //optimization
    }  //try

    // //момент изменения когда точно знаем что будет меняться меняем state this
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate ' , nextProps ,  nextState)
    // }


    static getDerivedStateFromProps(nextProps, prevState) {
        // запрещено доступ к стате и this
        return {
            // можно венруть стейт и они смержиться
        }
    }
    // позволяет получить не измененное дом дерево до обновления
    //  save sctrol example
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
    }


    //уже после componentWillUpdate
    //компонент обновлен
    componentDidUpdate() {
        console.log('componentDidUpdate ')
    }
    // обновляем стате для рендера ногого ui
    // static getDerivedStateFromError(error) {
    //     return hasError : true
    // }
    // при удалении
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // this.setState((preState) => count = 2 )

    componentDidCatch(error, info) { }

    handlerOnChange(event) {
        const name = event.target.value ? event.target.value : '';
        this.setState({ name: name })
    }

    render() {
        const style = {
            border: '1px solid #ccc',
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '5px',
            ':hover': {
                border: '1px solid black',
            }
        }

        return (
            <div style={style}>
                <p className='title'>{this.state.name}</p>
                <p className='title'>{this.state.price}$</p>
                <p className='title'><input type='text' placeholder='marka' value={this.state.name} onChange={this.handlerOnChange.bind(this)}></input></p>
                <p className='title'><button onClick={this.props.onDelete(this.props.index)}>delete</button> </p>
            </div>
        )
    }
}

export default Radium(Card);