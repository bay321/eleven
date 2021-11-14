import React from "react";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import logo from'./logo.png'
function Result() {

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "11result 페이지 접속 수" });
    }, [])

    return (
        <div>
            <img class="logo" alt="resultlogo" src={logo}/>
            <div class='title'>감사합니다. 결과는 이메일로 전송해드리겠습니다.</div>
        </div>
    )
}

export default Result;