import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import AppProvider from './components/AppProvider';
import { Toasts } from './components/Toasts';
import './App.css';

function AppContent(){
  return(
    <BrowserRouter>
    <Navbar></Navbar>
    <Toasts></Toasts>
      <Routes>
        <Route path="/" element={<Frontpage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/analytics" element={<Analytics/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

function App(){
  return(
    <AppProvider>
      <AppContent/>
    </AppProvider>
  );
}

export default App;