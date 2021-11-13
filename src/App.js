// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga4";
// import { useEffect } from 'react';
import Home from './Home'
import Survey from './Survey'
import Question from './Question'
import Result from './Result';
// import useGaTracker from './useGaTracker'

function App() {


  // useGaTracker();

  // const clickHandler =()=>{
  //   ReactGA.event({
  //     action:'Click the button',
  //     category:'Button'
  //   })
  //   alert("sent the info")
  // }

  // useEffect(()=>{
  //   ReactGA.initialize('G-61TBSKKBM7')
  // },[])

  return (
    <Router>

      {/* <Link to='one'>라이펫 문진하기</Link><br></br> */}
      {/* <Link to='two'>go to second page</Link> */}
      {/* <button onClick={clickHandler}>click</button> */}
      <div>라이펫 로고</div>
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
