import React,{Component} from "react";
import './App.css'
import Button from "./Button";
import Movie from './Movie'
import Nav from './Nav'

// import './App.css';
// import Counter from "./Counter"
// import YoutubeVideo from './YoutubeVideo'
// import dummyData from "./generateRandomId";


// function App() {
//   return (
//     <div className="App">
//       {dummyData.map(d=>{
//         return( 
//         <YoutubeVideo 
//           key={d.videoId}
//           videoId ={d.videoId}
//           videoName = {d.videoName} 
//           videoLength={d.videoLength} 
//           videoDescription={d.videoDescription}></YoutubeVideo>)
//         })}
//     </div>
//   );
// }

// export default App;

// class App extends Component{
//   constructor(props){
//     console.log('constructor')
//     super(props)
//     this.state = {
//       name:"operstu1"
//     }
//   }
//   changeName = () =>{
//     this.setState({name: "name changed"})
//   }
//   componentDidMount(){
//     console.log('mount')
//     console.log('---------------------')
//   }
//   componentDidUpdate(){
//     console.log('update')
//   }
//   componentWillUnmount(){
//     console.log('unmount')
//   }
//   render(){
//     console.log('render')
//     const{name} = this.state
//     return (
//       <div className="App">
//         <h1>{name}</h1>
//         <button onClick={this.changeName}>change Name</button>
//       </div>
//     )
//   }
// }
// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       loading: true,
//       movies:[]
//     }
//   }
//   componentDidMount(){
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then(res =>res.json())
//     .then(result =>{
//       const {data:{movies}} = result
//       console.log(movies)
//       this.setState({loading:false, movies})
//     })
//   }
//   render(){
//     const {loading, movies} = this.state
//     const style = {
//       display : 'flex',
//       flexWrap:'wrap',
//       justifyContent:'center',
//       alignitems:'center',
//       width:'60%',
//       margin:'100px auto',
//       textAlign:'center'
//     }
//     const loadingStyle = {
//       position: 'absolute',
//       left: '50%',
//       top: '50%',
//       transform:'translate(-50%,-50%)',
//       fontSize:'2rem'
//     }
//     if(loading){
//       return(
//         <div style={loadingStyle}>
//           <h1>Loading...</h1>
//         </div>
//       )
//     }else{
//       return (
//         <div style={style}>
//           {movies.map(movie =>{
//             return(
//               <Movie
//               key={movie.id}
//               title={movie.title}
//               genres = {movie.genres}
//               cover = {movie.medium_cover_image}
//               summary={movie.summary}></Movie>
//             )
//           })}
//         </div>
//       )
//     }
//   }
// }
// class App extends Component{
//   state = {
//     count: 0
//   }
//   increaseCount = () =>{
//     this.setState({count:this.state.count+1})
//   }
//   componentDidMount(){
//     this.countID = setInterval(
//       this.increaseCount,1000
//     )
//   }
//   componentWillUnmount(){
//     clearInterval(this.countID)
//   }
//   render(){
//     const{count} = this.state
//     const animal = animals[count%animals.length]
//     console.log(animal)
//     return(
//       <div className="App">
//         <h1>Increase count automatically</h1>
//       </div>
//     )
//   }
// }
function App(){
  const handleClick = () =>alert('clicked button')  
    return(
      <div className="App">
      <Button size="small" color="blue" handleClick={handleClick} disable={true}>Add Todo</Button>
      <Button size="medium" color="tomato" width="fullWidth">
        <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>
        Add Todo</Button>
      <Button size="large"color="gray">Add Todo</Button>
      </div>
    );
  }

export default App;