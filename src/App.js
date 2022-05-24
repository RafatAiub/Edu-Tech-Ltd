
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

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="contact" element={<Contact />} />
        <Route path="review" element={<Review />} />
        <Route path="*" element={<NotFound />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
