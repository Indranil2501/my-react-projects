import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import AgGridPage from './components/aggrid/AgGridPage';
import AppsPage from './components/apps/AppsPage';
import Calculator from './components/apps/Calculator';
import AreaChart from './components/d3chart/AreaChart';
import BarChart from './components/d3chart/BarChart';
import StackedBarChart from './components/d3chart/StackedBarChart';
import D3ChartPage from './components/d3chart/D3ChartPage';
import LineChart from './components/d3chart/LineChart';
import DemoPage from './components/demo/DemoPage';
import Reactstrap from './components/demo/Reactstrap';
import MuiAutocompletePage from './components/mui/MuiAutocompletePage';
import MuiAutocompleteReactWindowPage from './components/mui/MuiAutocompleteReactWindowPage';
import MuiPage from './components/mui/MuiPage';

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
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/reactstrap" element={<Reactstrap />} />
            <Route path="/lineChart" element={<LineChart />} />
            <Route path="/barChart" element={<BarChart />} />
            <Route path="/areaChart" element={<AreaChart />} />
            <Route path="/stackedBarChart" element={<StackedBarChart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;