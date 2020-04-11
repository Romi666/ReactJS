import React, { Component } from 'react'
import Test from '../Components/Test'
export default class containers extends Component {

    state = {
        listPerson : [
            {
                id :1,
                name : "Romi",
                age : 20,
            },
            {
                id : 2, 
                name : "Red",
                age : 10
            }
        ]
    }
    render() {
        return (
            <div>
                <Test list={this.state.listPerson}/>
            </div>
        )
    }
}
