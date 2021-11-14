import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import Home from './Home'
import Survey from './Survey'
import Question from './Question'
import Result from './Result';
function App() {


  useEffect(()=>{
    ReactGA.initialize('G-61TBSKKBM7')
  },[])

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "11웹사이트 유입 수" });
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
