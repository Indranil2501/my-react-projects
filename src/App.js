import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import AgGridPage from './components/aggrid/AgGridPage';
import D3ChartPage from './components/d3chart/D3ChartPage';
import MuiPage from './components/mui/MuiPage';
import MuiAutocompletePage from './components/mui/MuiAutocompletePage';
import MuiAutocompleteReactWindowPage from './components/mui/MuiAutocompleteReactWindowPage';
import AppsPage from './components/apps/AppsPage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aggrid" element={<AgGridPage />} />
            <Route path="/d3chart" element={<D3ChartPage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/mui" element={<MuiPage />} />
            <Route path="/mui-autocomplete" element={<MuiAutocompletePage />} />
            <Route path="/mui-autocomplete-react-window" element={<MuiAutocompleteReactWindowPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;