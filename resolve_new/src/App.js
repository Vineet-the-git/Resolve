
import './App.css';
import TemporaryDrawer from './Sidebar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <h1> This is the main page of our app</h1>
      <Routes />
      <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
}

export default App;
