import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Create from './components/create-component/create-component';
import Read from './components/read-component/read-component';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={< Create />}></Route>
        <Route path="/read" exact element={<Read />}></Route>
      </Routes>
    </Router >
  )
}

export default App;
