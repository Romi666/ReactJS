import React from 'react'

const Test = ({list}) => {

    const newList = list.map(res => {
        if(res.age===20) {
            return (
                <div key={res.id}>
                    <div> my name is {res.name}</div>
                    <div>my age is {res.age}</div>
                </div>
            )
        }else {
            return null;
        }
   
    })
    return (
        <div>
            {newList}
        </div>
    )
}

export default Test;
