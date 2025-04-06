import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Preloader from './components/Preloader';
import Modal from './components/Modal';

function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Router basename='garden-shop-it-hub'>
        <Preloader />
        <Modal modalState={modalState} setModalState={setModalState} />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage setModalState={setModalState} />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path='/products/all' element={<ProductListPage type={'all'} />} />
          <Route path='/products/sales' element={<ProductListPage type={'sale'} />} />
          <Route path='/categories/:id' element={<ProductListPage type={'categories'} />} />
          <Route path='/products/:id' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage setModalState={setModalState} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
