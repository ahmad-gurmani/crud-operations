import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Create from './components/create/create.component';
import Read from './components/read/read.component';
import Update from './components/update/update.component';

import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Create />}></Route>
      <Route path="/read" exact element={<Read />}></Route>
      <Route path="/update/:id" exact element={<Update />}></Route>
    </Routes>
  )
}

export default App;
