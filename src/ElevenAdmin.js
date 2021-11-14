import React, { useState } from "react";
// import ReactGA from "react-ga4";
import { useEffect } from "react";
import Axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// const dataList = [
//   {
//     id: 0,
//     title: "이름",
//     description: "반갑습니다! 십일리터에게 반려동물의 이름을 알려주세요. (주관식)",
//     type: "name"
//   },
//   {
//     id: 1,
//     title: "종",
//     description: "(이)는 강아지인가요, 고양이인가요?",
//     type: "species"
//   },
//   {
//     id: 2,
//     title: "품종",
//     description: "(이)의 품종은 무엇인가요?",
//     type: "breed"
//   }
// ]

function ElevenAdmin() {


  const [dataList, setDataList] = useState([])

  useEffect(() => {
    fetchLists()
}, [])
  const fetchLists = () => {
    Axios.post('https://makeup-home.com/elevenAdmin'
    // Axios.post('http://localhost:3001/elevenAdmin'
    ).then((response)=>{
      setDataList(response.data)
    })
    console.log(dataList)
  }



  return (
    <div>
      {dataList.map((item)=>
      <div key={item.id}>
        번호:{item.id}<br></br>
        이름:{item.name}<br></br>
        종{item.species}<br></br>
        품종:{item.breed}<br></br>
        성별:{item.sex}<br></br>
        나이:{item.age}<br></br>
        체형:{item.body}<br></br>
        몸무게:{item.weight}<br></br>
        내원이력:{item.history}<br></br>
        피부:{item.skin}<br></br>
        치아:{item.teeth}<br></br>
        뼈:{item.bone}<br></br>
        행동:{item.action}<br></br>
        눈:{item.eye}<br></br>
        면역력:{item.immunity}<br></br>
        심장:{item.heart}<br></br>
        신장:{item.kidney}<br></br>
        위:{item.gut}<br></br>
        간:{item.liver}<br></br>
        약:{item.medicine}<br></br>
        영양제:{item.nutrients}<br></br>
        건강검진 주기:{item.cycle}<br></br>
        거주지역:{item.habitat}<br></br>
        산책:{item.walk}<br></br>
        간식:{item.snack}<br></br>
        청결:{item.clean}<br></br>
        동거:{item.cohabitation}<br></br>
        마지막 및 이메일:{item.final}<br></br>
        <hr></hr>
      </div>
      )}
    </div>
  )
}

export default ElevenAdmin;