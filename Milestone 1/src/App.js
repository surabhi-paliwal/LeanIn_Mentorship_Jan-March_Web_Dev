import React from 'react';
import './App.css';
import classes from './components/App.module.css';

const initialList = [
  {
    id: 'a',
    name: 'Sakshi',
    age: 17,
  },
  {
    id: 'b',
    name: 'Ananya', 
    age: 19,
  },
];

  

const App = () => { 
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');


  function handleChange(event){
    setName(event.target.value);
  }

  function handleChange2(event){
    setAge(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name, age});
    setList(newList);
  }

  return (
   <body className={classes.bodyStyle} >
     <div >
      <div className={classes.divStyle} align="center">
      <label className={classes.labelStyle} htmlFor="name">Name </label>
        <input type="text" value={name} onChange={handleChange} />

        <br></br>
        <label className={classes.labelStyle} htmlFor="age">Age </label>
        <input type="number" value={age} onChange={handleChange2} />

        <br></br><br></br>
         <button className={classes.buttonStyle} type="button" onClick={handleAdd}>
          Submit
        </button> 
       
      </div>
      
      <div className={classes.listStyle}>
      <ul>
        {list.map((item) => (
          
          <li key={item.id}>{item.name} is {item.age} years old</li>


        ))}
      </ul>
      </div>
    </div>
    </body>
    
 );
};
export default App;
