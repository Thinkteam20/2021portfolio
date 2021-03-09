import './App.css';
import Home from '../src/components/Home'
import Navbar from '../src/components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact component={Home} path='/'/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
