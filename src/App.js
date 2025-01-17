//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let[todolist,setToDoList]=useState([]);

  let saveToDoList=(event)=>{
  
     let todoname=event.target.todoname.value;

     if(!todolist.includes(todoname)){
      let finaldolist=[...todolist,todoname]
      setToDoList(finaldolist)
     }else{
      alert("Task Already Exists!!!")
    }

    //alert(todoname);
    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{

    

    return(
    <ToDoListItems value={value} 
    key={index} 
    indexNumber={index} 
    todolist={todolist}
    setToDoList={setToDoList}
    />
  )
  });
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='todoname'/><button>Save</button>
      </form>
      <div className='outerDiv'>

      <ul>
        {list}
      </ul>

      </div>
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setToDoList}){
 let[status,setStatus]=useState(false)
 let deleteRow=()=>{
   alert(indexNumber)
    let finalData=todolist.filter((v,i)=>i!==indexNumber);
    setToDoList(finalData)
 };

 let checkStatus=()=>{
  setStatus(!status)
 }

  return(
      <li className={(status)? 'completetodo':''} onClick={checkStatus}>{indexNumber+1}.{value}<span onClick={deleteRow}>&times;</span></li>
  );
}