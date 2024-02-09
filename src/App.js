import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from 'react'
//import React from "react"; for class based comp
function App()
{
  // JS Funtions
  // const name = 'Rupesh'
  // const x = false
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])
  // delete Task
  const deleteTask = (id) =>
  {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
      {/* <h2>Hello {name}  {1 + 1} ternari ope {x ? 'Yes' : 'No'}</h2> */}
    </div>
  );
}

// Class based components
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
