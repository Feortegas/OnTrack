import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './styles/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Profile from './components/Profile';
import MeetTheDevs from './components/MeetTheDevs';

function App() {
  return (
    <div>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/project" element={<Project />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/meetTheDevs" element={<MeetTheDevs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
