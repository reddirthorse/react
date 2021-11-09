import React,{Component} from 'react'

// class Todo extends Component{
//     //이벤트 핸들러 함수
//     //constructor(props){
//     //    super(props)
//         state={
//         name:"cleaning",
//         done:false,
//         description:"cleaning my room"
//         }
//     //}
//     changeTodoName = () => {
//         this.setState({name:"Learning react"})
//     }
//     render(){
//         const {name, done, description} = this.state
//         return (
//             <>
//             <h3>name : {name}</h3>
//             <h4>done : {done?"finished":"not done"}</h4>
//             <p>description : {description}</p>
//             <button type="button" onClick={this.changeTodoName}>할 일 이름 바꾸기</button>
//             </>
//         )
//     }
// }
function Todo({user,name,done,description}){
    return(
        <>
        <h2>user:{user}</h2>
        <h2>name:{name}</h2>
        <h2>done:{done?"finished":"not done"}</h2>
        <h2>description:{description}</h2>
        <button type="button" onClick={this.changeTodoName}>할 일 이름 바꾸기</button>

        </>
    )
}
export default Todo;