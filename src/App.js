import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([]);
  /* state is immutable you cant directly change something you can recreate  and send it*/

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(" http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task that takes a specific id

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks${id}"`, {
      method: "DELETE",
    }); /* filters out id's thats equal to clicked id and displays the rest whicjh are not equal to clicked id*/

    setTasks(tasks.map((task) => task.id !== id));
  };

  //toggle reminder styling when true
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    ); /*sets the reminder ,if true than false ,if false than true*/
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "There's no task to show yet!"
      )}
    </div>
  );
};
/* && is  a truthy  ternary operator without else line 56*/
export default App;
