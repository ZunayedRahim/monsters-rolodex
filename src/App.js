import CardList from './components/card-list/card-list.component';
//import { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component'
import { useState, useEffect } from 'react';

const App = () =>{

  const [searchField, setSearchField] = useState(''); // [value,setvalue] = useState(initialValue)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters,setFilterMonster] = useState(monsters); // will be empty
  //using useEffect so it only renders once
  // const [value,setvalue] = useState(initialValue);
  //useEffect(()=>{},[]); structure
  //only renders if stuff inside [] changes

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> setMonsters(users));
  },[]);
  
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonster(newFilteredMonsters);
  },[monsters,searchField]); //renders if monsters or searchfield changes

  console.log({searchField});

  
  const onSearchChange = (event)=>{

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return(
    <div className='App'>
      <h1 className="app-title">Monsters Rolodex</h1>
      
      <SearchBox
        className = 'monster-search-box'
        placeholder = 'search munsters'
        onChangeHandler = {onSearchChange}
        />

      <CardList monsters={filteredMonsters}/>
      
    </div>
  );
} 

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters : [],
//       searchField : '',

//     };
//     //console.log('constructor');
//   }

//   componentDidMount(){
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response)=> response.json())
//       .then((users) =>  
//         this.setState(
//           ()=>{
//             return {monsters : users};
//           }
//       )
//       );
      
//   }

//     onSearchChange = (event) => {
//       //console.log(event.target.value);
//       const searchField = event.target.value.toLocaleLowerCase();
//       this.setState(()=>{
//         return {searchField};
//       });

//     }
//   render(){
//     //console.log('render');
//     const {monsters, searchField} = this.state;
//     const{onSearchChange} = this; 


//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox 
//         className='monster-search-box'
//         placeholder = 'search munsters'
//         onChangeHandler = {onSearchChange}
//         />
        
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
