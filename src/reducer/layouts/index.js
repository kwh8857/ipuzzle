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