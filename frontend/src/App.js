import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from './screens/CartScreen';
// import LoginScreen from './screens/LoginScreen';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
          {/* <Routes>
            <Route path='/login' element={<LoginScreen />} ></Route>
            <Route path='/product/:id' element={<ProductScreen />} ></Route>
            <Route path='/cart/:id?' element={<CartScreen />} ></Route>
            <Route path='/' element={<HomeScreen />} ></Route>
          </Routes> */}
          {/* <HomeScreen /> */}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
