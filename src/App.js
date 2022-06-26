
import './App.css';
import {Dashboard} from './Dashboard/Dashboard';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserManagement from './modals/UserManagement/UserManagement';
import Academics from './modals/Academics/Academics';
import Inbox from './modals/Inbox/Inbox';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path ="/Dashboard" element={<Dashboard/>}/>
        <Route exact path ="/UserManagement" element={<UserManagement/>}/>
        <Route exact path ="/Academics" element={<Academics/>}/>
        <Route exact path ="/Notice Board" element={<Inbox/>}/>
      </Routes>
      <Dashboard/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
