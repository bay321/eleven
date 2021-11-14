import React, { useState } from "react";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
    description: "(이)가 병원에 내원했던 이유를 모두 골라주세요.(간,위/장,신장/방광,심장,면역력,치아,뼈/관절,피부/모질,눈,행동,없어요)",
    type: "history"
  },
  {
    id: 8,
    title: "피부/모질",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(피부 각질 및 뾰루지,몸을 긁거나 발을 핥음,귀를 가려워 함,털에 윤기가 없고 숱이 줄음)",
    type: "skin"
  },
  {
    id: 9,
    title: "치아",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(사료나 간식을 흘리면서 먹음,치석,구취,양치질이 어려워요)",
    type: "teeth"
  },
  {
    id: 10,
    title: "관절/뼈",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(다리에서 뚝뚝거리는 느낌을 받아요,걷는 모습이 불편해보여요,계단이나 침대에서 뛰어오를 때 주저해요)",
    type: "bone"
  },
  {
    id: 11,
    title: "행동",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(병원에 갈때 스트레스를 받아요,집에 혼자 남겨졌을 때 불안해해요,주변의 소음에 민감해요, 낯선 사람이나 동물에 경계가 심해요)",
    type: "action"
  },
  {
    id: 12,
    title: "눈",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(눈이 혼탁해졌어요,장난감이나 사료 그릇을 잘 찾지 못해요, 여기저기 부딪혀요)",
    type: "eye"
  },
  {
    id: 13,
    title: "면역력",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(콧물을 흘려요,재채기를 종종해요, 눈물을 많이 흘려요,눈꼽이 자주 껴요)",
    type: "immunity"
  },
  {
    id: 14,
    title: "심장",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(운동을 하면 금방 지쳐요, 켁켁거리는 기침을 자주해요,안았을 때 심장이 크게 뛰어요, 쉴 때도 호흡이 빠르거나 힘들어보여요)",
    type: "heart"
  },
  {
    id: 15,
    title: "신장/방광",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(물을 많이 마시고 소변을 자주 봐요,입에서 구취가 나요,최근 들어 체중이 빠졌어요,소변을 흘리거나 혈뇨가 있어요)",
    type: "kidney"
  },
  {
    id: 16,
    title: "위/장",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(묽은 변 혹은 딱딱한 변을 자주봐요,이유 없이 식사를 거를 때가 있어요,토를 자주해요, 배에서 꼬르륵 소리가 나요)",
    type: "gut"
  },
  {
    id: 17,
    title: "간",
    description: "(이)가 자주 보이는 행동이나 습관을 모두 선택해주세요.(기운이 없어요, 체중이 빠졌어요, 토하는 횟수가 늘었어요, 소변색이 진해졌어요)",
    type: "liver"
  },
  {
    id: 18,
    title: "약",
    description: "(이)가 복용한 약이 있다면, 어떤 질병에 대한 약인가요?(간,위/장,신장/방광,심장,면역력,치아,뼈/관절,피부/모질,눈,행동,없어요)",
    type: "medicine"
  },
  {
    id: 19,
    title: "영양제",
    description: "(이)가 먹는, 혹은 먹었던 영양제가 있다면, 어떤 기능 보조를 위한 것인가요?(간,위/장,신장/방광,심장,면역력,치아,뼈/관절,피부/모질,눈,행동,없어요)",
    type: "nutrients"
  },
  {
    id: 20,
    title: "건강검진 주기",
    description: "(이)는 건강검진을 얼마나 자주 받나요?(반기마다,매년,격년마다,받지 않음)",
    type: "cycle"
  },
  {
    id: 21,
    title: "거주지",
    description: "(이)는 어디에서 거주하고 있나요?(실내,실외)",
    type: "habitat"
  },
  {
    id: 22,
    title: "산책",
    description: "(이)는 산책이나 야외 활동을 얼마나 자주 하나요?(주 3회 미만, 주 3회 이상, 매일, 하지않음)",
    type: "walk"
  },
  {
    id: 23,
    title: "간식빈도",
    description: "(이)는 간식을 얼마나 자주 먹나요?(주 3회 미만, 매일 1회, 매일 2회 이상, 거의 먹지 않음)",
    type: "snack"
  },
  {
    id: 24,
    title: "청결관리",
    description: "(이)는 목욕과 위생미용을 얼마나 자주 하나요?(분기당, 격주나 달마다, 매주, 하지 않음)",
    type: "clean"
  },
  {
    id: 25,
    title: "동거여부",
    description: "(이)는 다른 동물들과 함께 생활하고 있나요?(예,아니오)",
    type: "cohabitation"
  },
  {
    id: 26,
    title: "부탁드려요:)",
    description: "라이펫을 어떻게 처음 알게 되었나요?(네이버,인스타그램,에브리타임,지인의 소개, 기타)(문진 결과를 알고 싶으면 이메일도 적어주세요)",
    type: "final"
  }
]

// const redirect = () => {
//     return <Redirect to='/result'  />
// }

function Question() {
  const navigate = useNavigate()
  const Submit = () => {
    Axios.post('https://makeup-home.com/eleven', {
    // Axios.post('http://localhost:3001/eleven', {
      name: name,
      species: species,
      breed: breed,
      sex: sex,
      age: age,
      body: body,
      weight: weight,
      history: history,
      skin: skin,
      teeth: teeth,
      bone: bone,
      action: action,
      eye: eye,
      immunity: immunity,
      heart: heart,
      kidney: kidney,
      gut: gut,
      liver: liver,
      medicine: medicine,
      nutrients: nutrients,
      cycle: cycle,
      habitat: habitat,
      walk: walk,
      snack: snack,
      clean: clean,
      cohabitation: cohabitation,
      final: final
    })
    navigate('/result')
    // alert("성공적으로 전송되ss었습니다")

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
  const result = dataList.filter((data) => data.id === status).map((item) =>
    <div key={item.id}>
      <div class='title'>{item.title}</div>
      <div class='description'>{item.id === 0 ? (<></>) : (<>{name}</>)}{item.description}</div>
      <input class="inputbox" value={stateList[item.id].value} onChange={(e) => stateList[item.id].func(e.target.value)} type='text' />
      <button class='leftBtn' onClick={prevBtn}>이전</button>
        <button class={stateList[item.id].value?("rightBtnAfter"):("rightBtn")} onClick={nextBtn}>다음</button>
      <br></br>
    </div>
  )






  useEffect(() => {
    ReactGA.event({
      action: '문진 클릭 이탈체크',
      category: status
    })
  }, [status])
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "question 페이지 접속 수" });
  }, [])
  return (
    <div>
      {/* 문진 페이지{status} */}
      {result}
      {/* <div calss="btnWrapper"> */}
        {/* <button class='leftBtn' onClick={prevBtn}>이전</button>
        <button class='rightBtn' onClick={nextBtn}>다음</button> */}
      {/* </div> */}

    </div>
  )
}

export default Question;