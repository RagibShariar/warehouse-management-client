import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login/Login';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageItems from './Components/ManageItems/ManageItems';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';
import Home from './Components/Home/Home';
import SignUp from './Components/Login/SignUp/SignUp';
import ForgetPass from './Components/Login/ForgotPass/ForgetPass';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path='/manage-items' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>} />
        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>} />
        <Route path='/add-item' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>} />
        <Route path='/my-items' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/forget-password" element={<ForgetPass></ForgetPass>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
