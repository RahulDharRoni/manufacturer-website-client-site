import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Tools from './Pages/Tools/Tools';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReviews from './Pages/Dashboard/AddReviews';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}
        />
        <Route path="/purchase/:partsId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}
        />


        <Route path="tools" element={<Tools />} />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard> </Dashboard>
          </RequireAuth>
        }>
          {/* <Route index element={<Dashboard></Dashboard>}></Route> */}
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/addreviews' element={<AddReviews></AddReviews>}></Route>
          <Route path='/dashboard/manageproducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='/dashboard/addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='/dashboard/manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='/dashboard/makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
