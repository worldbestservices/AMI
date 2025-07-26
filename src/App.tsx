import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import BlockchainAnimation from './components/BlockchainAnimation';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Projects from './pages/Projects';
import Tokenomics from './pages/Tokenomics';
import Steps from './pages/Steps';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllEmailsPage from './pages/AllEmailsPage';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <div className="min-h-screen bg-gradient-to-br from-void-black to-midnight-blue text-white">
        <BlockchainAnimation light={true} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/emails-submitted" element={<AllEmailsPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;