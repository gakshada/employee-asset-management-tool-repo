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
import UpdateEmployeeName from './component/UpdateEmployeeName';
import GetAllAssets from './component/GetAllAssets';
import UpdateAssetStatus from './component/UpdateAssetStatus';
import UpdatePhoneAndAddress from './component/UpdatePhoneAndAddress';
import AdminContact from './component/AdminContact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>}  />
        <Route path='/employee-dashboard/:id' element={<EmployeeDashboard/>} />
        <Route path='/add-employee' element={<AddEmployee/>} />
        <Route path='/retrieve-all-employee' element={<GetAllEmployees/>} />
        <Route path='/retrieve-employee-with-id' element={<GetSingleEmployee/>} />
        <Route path='/update-name/:id' element={<UpdateEmployeeName/>} />
        <Route path='/update-phone-and-address/:id' element={<UpdatePhoneAndAddress/>} />
        <Route path='/add-asset' element={<AddAsset/>}/>
        <Route path='/retrieve-all-asset-details' element={<GetAllAssets/>} />
        <Route path='/retrieve-asset-with-id' element={<GetAllAssetsWithId/>} />
        <Route path='/update-asset/:itemNumber' element={<UpdateAssetStatus/>} />
        <Route path='/admin-support' element={<AdminContact/>} />
      </Routes>
    </Router>
  );
}

export default App;
