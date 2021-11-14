import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import lifet from './lifet.png'
import lifet1 from './lifet1.png'
import lifet2 from './lifet2.png'
import homeBtn from './homeBtn.png'
import logo from './logo.png'

function Home() {

  // const clickHandler = () => {
  //   ReactGA.event({
  //     action: 'Click the button',
  //     category: '수의사님과 1:1 상담'
  //   })
  //   alert("sent the info")
  // }
  useEffect(()=>{
    ReactGA.initialize('G-61TBSKKBM7')
  },[])
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "홈페이지 방문 수" });
  }, [])
  return (
    <div class="container">
      {/* <div class="title">우리 아이는 아파도 말을 하지 않아요.</div>
      <div class="content">반려견, 반려묘 품종의 70%는 유전적 결함을 갖고 있어요.</div>
      <div class="content1">마지막 건강 검진이 언제셨나요?</div>
      <div class="content2">슬개골 탈구는 2기까지증상을 보이지 않아요.</div>
      <div>산책은 얼마나 자주 나가시나요?</div>
      <div class="redline"></div>
      <div class="description">라이펫 전담 수의사가 설계한 27문항으로 10가지 항목의 위험 지수를 알려드려요</div>
      <div class="redline1"></div>
      <div class="redline2"></div>

      <div class="cate1">면역력</div>
      면역력 간 뼈/관절 행동 치아 
      위/장 눈 신장/방광 심장 피부 */}
            <img class="logo" alt="logo" src={logo}/>
      <img class="logo" alt="landing1" src={lifet1}/>
      <img class="logo" alt="landing" src={lifet}/>
      <img class="logo" alt="landing2" src={lifet2}/>
      
      {/* <div>사진자료</div> */}
      <Link to='survey'><img class="logo" alt="homeBtn" src={homeBtn}/></Link><br></br>
      {/* <button onClick={clickHandler}>수의사님과 1:1 상담</button> */}

    </div>
  )
}

export default Home;