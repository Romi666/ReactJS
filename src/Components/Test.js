import React, { Component } from 'react'

const Test = (props) => {
    const { list } = props
    const newList = list.map(res => {
        return (
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

export default Test;
