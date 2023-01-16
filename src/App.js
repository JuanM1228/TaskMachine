import './App.css';
import freecodecampLogo from './images/fcc_primary_large.png'
import TaskList from './components/TaskList.jsx'
function App() {
  return (
    <div className="task-app">
      <div className='freecodecamp-logo-container'>
        <img
          src={freecodecampLogo}
          alt='freecodecamp-logo'
          className='freecodecamp-logo' />
      </div>
      <div className='task-list-main'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>

    </div>
  );
}

export default App;
