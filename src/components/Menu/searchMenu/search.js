import React, { Component } from 'react'
import { AddContect } from '../../Panel/Panel'

class Search extends Component {

    render() {
        return (
            <div>
                <AddContect.Consumer >
                    {(search => <input type='text' placeholder='search' value={search.search} onChange={search.onChangeHandle}></input>)}
                </AddContect.Consumer>
            </div>
        )
    }
}
export default Search;