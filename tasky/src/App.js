import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
     <h1>Tasky</h1>
     <Task title="Dishes" deadline="Today" description="empty dishwater" />
      <Task title="Laundry" deadline="Tomorrow" description="fold laundry and put away"/>
      <Task title="Tidy" deadline="Today" description="tidy description"/>
  
    </div>
  );
}

export default App;
