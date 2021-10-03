import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import './App.css';
import Login from './Login';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AnimatedSwitch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/MainPage" exact>
          <MainPage />
        </Route>
      </AnimatedSwitch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
