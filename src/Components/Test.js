import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        const {list} = this.props
        const newList = list.map(res=> {
            return(
                <div key={res.id}>
                <div> my name is {res.name}</div>
                <div>my age is {res.age}</div>
                </div>
            )
        })
        return (
            <div>
                {newList}
           </div>
        )
    }
}
