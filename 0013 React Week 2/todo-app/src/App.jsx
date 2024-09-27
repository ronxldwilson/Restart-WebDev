import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
 	title: "New Todo 1",
	description: "Desc ToDo 1",
	stats: false
  },{
	title: "New Todo 2",
	description: "Desc ToDo 123",
	stats: false
 
  },{
	title: "New Todo 1123",
	description: "Desc ToDo 1",
	stats: false
 
  }]);

  function addTodo(){
	setTodos([...todos,{
		title: "New State Addition",
		description:"New Ones here"
	}])
  }

  return (
	<div>
	<button onClick={addTodo}>Add Some Todo</button>
	{todos.map(function(todo){
		return <Todo title={todo.title} description={todo.description}/>
	})}
  	</div>
  )
  
}

function Todo(props){
	return <div>
			<h1>{props.title}</h1>
			<h2>{props.description}</h2>
		</div>
}

export default App
