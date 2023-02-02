//import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminDashboard from './component/AdminDashboard';
import EmployeeDashboard from './component/EmployeeDashboard';
import GetSingleEmployee from './component/GetSingleEmployee';
import GetAllEmployees from './component/GetAllEmployees';
import GetAllAssetsWithId from './component/GetAllAssetsWithId';
import AddEmployee from './component/AddEmployee';
import AddAsset from './component/AddAsset';
import Home from './component/Home';
import UpdateEmployee from './component/UpdateEmployee';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>}  />
        <Route path='/employee-dashboard' element={<EmployeeDashboard/>} />
        <Route path='/add-employee' element={<AddEmployee/>} />
        <Route path='/retrieve-all-employee' element={<GetAllEmployees/>} />
        <Route path='/retrieve-employee-with-id' element={<GetSingleEmployee/>} />
        <Route path='/update/:id' element={<UpdateEmployee/>} />
        <Route path='/add-asset' element={<AddAsset/>} />
        <Route path='/retrieve-asset-with-id' element={<GetAllAssetsWithId/>} />
      </Routes>
    </Router>
  );
}

export default App;
