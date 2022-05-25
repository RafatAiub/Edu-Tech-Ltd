
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/About/About';
import Order from './Pages/Order/Order';
import Contact from './Pages/Contact/Contact';
import Review from './Pages/Order/Review';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Order/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';

import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Portfolio from './Pages/Personal/Portfolio';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/purchase/:_id" element={<Purchase />} /> */}
        <Route path="purchase/:_id" element={<RequireAuth><Purchase /></RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="contact" element={<Contact />} />
        <Route path="review" element={<Review />} />
        <Route path="*" element={<NotFound />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
