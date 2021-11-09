import React, { Component } from 'react'

class  NameTag extends Component{
    state = {
        count : 'initial name'
    }
    //이벤트핸들러 함수
    changeName = () =>{
        this.setState.name='changed name'
    }
    render(){
        console.log('nameTag')
        const{name} = this.state
        return(
            <>
            <h1>{name}</h1>
            <button type = "button" onClick={this.changeName}>change name</button>
            </>
        )
    }
}
export default NameTag;