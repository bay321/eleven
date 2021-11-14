import React from "react";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import survey from './survey.png'
import surveyBtn from './surveyBtn.png'
function Survey() {

    // const clickHandler = () => {
    //     ReactGA.event({
    //         action: 'Click the button',
    //         category: '문진 시작 전 버튼 클릭'
    //     })
    //     alert("sent the info")
    // }
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "survey 페이지 접속 수" });
    }, [])
    return (
        <div>
      <img class="logo" alt="survey" src={survey}/>
      

            {/* <div>3분 문진으로 우리 아이의 영양 상태를 확인해주세요.</div>
            <div>수의사가 설계한 문진으로우리 아이에게 필요한 영양 성분을 찾아주세요.</div>
            <div>본사의 문진은 전문적인 의료기관을 대체하지 못합니다.</div> */}
            <Link to='/question'><img class="logo" alt="surveyBtn" src={surveyBtn}/></Link><br></br>
            {/* <button onClick={clickHandler}>문진 시작 전 버튼</button> */}
        </div>
    )
}

export default Survey;