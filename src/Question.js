import React, { useState } from "react";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Axios from 'axios'

const dataList = [
  {
    id: 0,
    title: "이름",
    description: "반갑습니다! 십일리터에게 반려동물의 이름을 알려주세요. (주관식)",
    type: "name"
  },
  {
    id: 1,
    title: "종",
    description: "(이)는 강아지인가요, 고양이인가요?",
    type: "species"
  },
  {
    id: 2,
    title: "품종",
    description: "(이)의 품종은 무엇인가요?",
    type: "breed"
  },
  {
    id: 3,
    title: "성별",
    description: "(이)의 성별은 무엇인가요?",
    type: "sex"
  },
  {
    id: 4,
    title: "나이",
    description: "(이)의 나이는 몇살인가요??",
    type: "age"
  },
  {
    id: 5,
    title: "체형",
    description: "(이)의 체형은 어떻게 되나요?",
    type: "body"
  },
  {
    id: 6,
    title: "몸무게",
    description: "(이)의 몸무게는 어떻게 되나요?",
    type: "weight"
  },
  {
    id: 7,
    title: "내원이력",
    description: "(이)가 병원에 내원했던 이유를 모두 골라주세요.",
    type: "history"
  },
  {
    id: 8,
    title: "피부/모질",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "skin"
  },
  {
    id: 9,
    title: "치아",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "teeth"
  },
  {
    id: 10,
    title: "관절/뼈",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "bone"
  },
  {
    id: 11,
    title: "행동",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "action"
  },
  {
    id: 12,
    title: "눈",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "eye"
  },
  {
    id: 13,
    title: "면역력",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "immunity"
  },
  {
    id: 14,
    title: "심장",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "heart"
  },
  {
    id: 15,
    title: "신장/방광",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "kidney"
  },
  {
    id: 16,
    title: "위/장",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "gut"
  },
  {
    id: 17,
    title: "간",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.",
    type: "liver"
  },
  {
    id: 18,
    title: "약",
    description: "(이)가 복용한 약이 있다면, 어떤 질병에 대한 약인가요?",
    type: "medicine"
  },
  {
    id: 19,
    title: "영양제",
    description: "(이)가 먹는, 혹은 먹었던 영양제가 있다면, 어떤 기능 보조를 위한 것인가요?",
    type: "nutrients"
  },
  {
    id: 20,
    title: "건강검진 주기",
    description: "(이)는 건강검진을 얼마나 자주 받나요?",
    type: "cycle"
  },
  {
    id: 21,
    title: "거주지",
    description: "(이)는 어디에서 거주하고 있나요?",
    type: "habitat"
  },
  {
    id: 22,
    title: "산책",
    description: "(이)는 산책이나 야외 활동을 얼마나 자주 하나요?",
    type: "walk"
  },
  {
    id: 23,
    title: "간식빈도",
    description: "(이)는 간식을 얼마나 자주 먹나요?",
    type: "snack"
  },
  {
    id: 24,
    title: "청결관리",
    description: "(이)는 목욕과 위생미용을 얼마나 자주 하나요?",
    type: "clean"
  },
  {
    id: 25,
    title: "동거여부",
    description: "(이)는 다른 동물들과 함께 생활하고 있나요?",
    type: "cohabitation"
  },
  {
    id: 26,
    title: "부탁드려요:)",
    description: "라이펫을 어떻게 처음 알게 되었나요?",
    type: "final"
  }
]

function Question() {

  const Submit = () => {
    Axios.post('https://makeup-home.com/Contact', {
      name: name,
      company: species,
      email: breed,
      phone: sex,
      title: age,
      description: body
      // author: "asda",
      // title: name,
      // description: species
    })
    window.location.href = '/result'
    alert("성공적으로 전송되었습니다")
    // {console.log(response.data[0].id)})

  }



  const [status, setStatus] = useState(0)
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")
  const [breed, setBreed] = useState("")
  const [sex, setSex] = useState("")
  const [age, setAge] = useState("")
  const [body, setBody] = useState("")
  const [weight, setWeight] = useState("")
  const [history, setHistory] = useState("")
  const [skin, setSkin] = useState("")
  const [teeth, setTeeth] = useState("")
  const [bone, setBone] = useState("")
  const [action, setAction] = useState("")
  const [eye, setEye] = useState("")
  const [immunity, setImmunity] = useState("")
  const [heart, setHeart] = useState("")
  const [kidney, setKidney] = useState("")
  const [gut, setGut] = useState("")
  const [liver, setLiver] = useState("")
  const [medicine, setMedicine] = useState("")
  const [nutrients, setNutrients] = useState("")
  const [cycle, setCycle] = useState("")
  const [habitat, setHabitat] = useState("")
  const [walk, setWalk] = useState("")
  const [snack, setSnack] = useState("")
  const [clean, setClean] = useState("")
  const [cohabitation, setCohabitation] = useState("")
  const [final, setFinal] = useState("")
  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")

  const stateList = [
    {
      value: name,
      func: (e) => setName(e)
    },
    {
      value: species,
      func: (e) => setSpecies(e)
    },
    {
      value: breed,
      func: (e) => setBreed(e)
    },
    {
      value: sex,
      func: (e) => setSex(e)
    },
    {
      value: age,
      func: (e) => setAge(e)
    },
    {
      value: body,
      func: (e) => setBody(e)
    },
    {
      value: weight,
      func: (e) => setWeight(e)
    },
    {
      value: history,
      func: (e) => setHistory(e)
    },
    {
      value: skin,
      func: (e) => setSkin(e)
    },
    {
      value: teeth,
      func: (e) => setTeeth(e)
    },
    {
      value: bone,
      func: (e) => setBone(e)
    },
    {
      value: action,
      func: (e) => setAction(e)
    },
    {
      value: eye,
      func: (e) => setEye(e)
    },
    {
      value: immunity,
      func: (e) => setImmunity(e)
    },
    {
      value: heart,
      func: (e) => setHeart(e)
    },
    {
      value: kidney,
      func: (e) => setKidney(e)
    },
    {
      value: gut,
      func: (e) => setGut(e)
    },
    {
      value: liver,
      func: (e) => setLiver(e)
    },
    {
      value: medicine,
      func: (e) => setMedicine(e)
    },
    {
      value: nutrients,
      func: (e) => setNutrients(e)
    },
    {
      value: cycle,
      func: (e) => setCycle(e)
    },
    {
      value: habitat,
      func: (e) => setHabitat(e)
    },
    {
      value: walk,
      func: (e) => setWalk(e)
    },
    {
      value: snack,
      func: (e) => setSnack(e)
    },
    {
      value: clean,
      func: (e) => setClean(e)
    },
    {
      value: cohabitation,
      func: (e) => setCohabitation(e)
    },
    {
      value: final,
      func: (e) => setFinal(e)
    }
  ]


  // const setFunc=(e,value)=>{
  //   setValue(e)
  // }
  const result = dataList.filter((data) => data.id === status).map((item) =>
    <div key={item.id}>
      {item.title}<br></br>
      {item.id === 0 ? (<></>) : (<>{name}</>)}{item.description}<br></br>
      <input value={stateList[item.id].value} onChange={(e) => stateList[item.id].func(e.target.value)} type='text' />
      <br></br>
    </div>
  )




  const prevBtn = () => {
    if (status > 0) {
      setStatus(status - 1)
    } else {
      return
    }

  }
  const nextBtn = () => {
    if (status < (dataList.length - 1)) {
      setStatus(status + 1)
    } else {
      Submit()
      // return
    }

  }
  // const clickHandler =()=>{
  //     ReactGA.event({
  //       action:'Click the button',
  //       category:'두번째 페이지의 버튼 클릭'
  //     })
  //     alert("sent the info")
  //   }
  useEffect(() => {
    // ReactGA.initialize('G-61TBSKKBM7')
    ReactGA.send({ hitType: "pageview", page: "두번째 페이지 접속" });
  }, [])
  return (
    <div>
      문진 페이지{status}
      {/* <br></br><input type="text" /><br></br> */}
      {/* <button onClick={clickHandler}>이전</button>
            <button onClick={clickHandler}>다음</button> */}
      {result}
      <button onClick={prevBtn}>이전</button>
      <button onClick={nextBtn}>다음</button>

      {/* <h3>글을 써볼까요?</h3>
      <div>
        제목: <input type="textarea" name="title" onChange={(e) => {
          setTitle(e.target.value)
        }}></input>
      </div>
      <div>
        내용: <input type="textarea" name="description" onChange={(e) => {
          setDescription(e.target.value)
        }}></input>
      </div>
      <button onClick={Submit}>
        글 작성하기
      </button> */}
    </div>
  )
}

export default Question;