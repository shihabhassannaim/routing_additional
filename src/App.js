import './App.css';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/friends/:id' element={<FriendDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
