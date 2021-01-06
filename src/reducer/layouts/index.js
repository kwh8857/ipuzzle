const initialState = {
  userState: 'PC',
  header: {
    list: [{
      title: '브랜드스토리',
      type: 'STORY'
    }, {
      title: '제품',
      type: 'PRODUCT'
    }, {
      title: '문의',
      type: 'QA'
    }]
  },
  main: {
    s4: [{
      img: 's4_1',
      title: '연결에 집중합니다',
      sub: `이미지와 이미지를 연결하고 이미지와 추억을 이어주고, 
가족과 가족을 이어주고 더 건강한 기억과 지금을 이어줍니다
`
    }, {
      img: 's4_2',
      title: '매일매일 함께 합니다',
      sub: `한번의 경험이 평생의 추억이 되는 것에는 반복적이고 꾸준한 행동이 필요합니다
재사용과 반복이 가능한 기본에 충실한 사용성을 목표로 매일 만날 수 있는 디바이스를 꿈꿉니다
`
    }, {
      img: 's4_3',
      title: '탄탄한 그러나 쉬운 사용을 목표합니다',
      sub: `자체 개발한 기술을 이용해 기본이 탄탄한 디바이스를 연구하는 동시에 
알기 쉬운 편리한 사용성을 목표로 온가족이 함께할 수 있는 디바이스를 만듭니다
`
    }, ]
  }
}

const layouts = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case 'LAYOUTS/USER/CHANGE':
      return {
        ...state,
        userState: payload
      };

    default:
      return state
  }
}
export default layouts