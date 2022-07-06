import './App.css';
import Logo from './assets/logo.png';
import './style/task.css'
import TaskList from './components/task-list'

function App() {
  return (
    <div className="task-app">
      <div className='logo-container'>
        <img
          src={ Logo }
          className="logo"
          alt=""
        />
      </div>
      <div className='principal-list-task'>
        <h1>To Do list</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
