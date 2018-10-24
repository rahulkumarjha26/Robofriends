import React,{Component} from 'react';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
class App extends Component{
    constructor(){
        super();
        this.state ={
            robots: [],
            searchfield:'',
            title:'RoboFriends'
        }
    }
   
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
    onButtonPress = (event) =>{
        this.setState({title: 'I love you \n Dipabali'});
        this.setState({robots:[{
            id:69,
            name:'Rahul Jha',
            email:'rahulkumarjha26@gmail.com'
        },
        {
            id:96,
            name:'Dipabali Bose',
            email:'dipablibose@gmail.com'
        }
    ]})
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render(){
        
        const filterRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
           <div className='tc'>
                <div>
                    <h1 className='pa2 ma2 f1'>{this.state.title}</h1>
                    <SearchBox searchChange={this.onSearchChange}/><br/>
                </div>
                <Scroll>
                    <CardArray robots={filterRobots}/>
                </Scroll>
                <button type='button' onClick={this.onButtonPress}/>
           </div>
        )
    }
}


export default App;