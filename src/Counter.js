import React, { Component } from "react";

class Counter extends Component{
    state = {
        count:0
    }
    increase = () =>{
        const {count} = this.state
        console.log(`before updating state:${count}`)
        this.setState((prevState)=>{
            return {count:prevState.count + 1}
        })
        console.log(`after updating state:${count}`)
    }
    increaseMultiple = () =>{
        //업데이트 되지 않는 구간
        this.increase()
        this.increase()
        this.increase()
        //-----------------------------구간끝
        console.log(`right after event:${this.state.count}`)
    }
    render(){
        const {count} = this.state
        console.log(`state in render function:${count}`)
        return(
            <>
            <h1>{count}</h1>
            <button type="button" onClick={this.increase}>increase count</button>
            </>
        )
    }
}
export default Counter;