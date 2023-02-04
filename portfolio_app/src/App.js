import { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';
import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [meData, setMeData] = useState();

  const fetchData = async () => {
    try {
      let response = await axios.get("./data/me.json")
      setMeData(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home name={meData.first_name} description={meData.intro_text} profile_pic={meData.profile_pic} />
      <Experiences />
      <Interests />
      <Projects />
      <Contact />
      <div className="content">
      </div>
    </div>

  );
}

export default App;
