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
      let response = await axios.get("./data/me.json");
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
      <Experiences experiences={meData.experience} />
      <Interests interests={meData.interests} />
      <Projects projects={meData.projects} />
      <Contact contact={meData.contact} />
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
    </div>

  );
}

export default App;
