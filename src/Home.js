import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function Home() {

  const clickHandler = () => {
    ReactGA.event({
      action: 'Click the button',
      category: '수의사님과 1:1 상담'
    })
    alert("sent the info")
  }
  // const location = useLocation();
  useEffect(() => {
    // ReactGA.initialize('G-61TBSKKBM7')
    ReactGA.send({ hitType: "pageview", page: "홈페이지 접속" });
  }, [])
  return (
    <div>
      우리 아이는 아파도 말을하지 않아요.<br></br>
      <div>반려견, 반려묘 품종의 70%는 유전적 결함을 갖고 있어요.</div>
      <div>마지막 건강 검진이 언제셨나요?</div>
      <div>슬개골 탈구는 2기까지증상을 보이지 않아요.</div>
      <div>산책은 얼마나 자주 나가시나요?</div>
      단 3분으로 우리 아이의 어디를 어떻게 관리해야하는지 알려드릴게요<br></br>
      <Link to='survey'>우리 아이 문진하기</Link><br></br>
      <button onClick={clickHandler}>수의사님과 1:1 상담</button>

    </div>
  )
}

export default Home;