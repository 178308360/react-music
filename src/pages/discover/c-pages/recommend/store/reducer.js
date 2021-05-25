import * as actionTypes from "./constants"
import { Map } from 'immutable'
//im对象
const defaultState = Map( 
  {
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
    UpRanking: [],
    NewRanking: [],
    OriginRanking: [],
  }
)

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      //返回一个新对象
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_NEW_RAKING:
      return state.set('NewRanking', action.NewRanking)
      case actionTypes.CHANGE_UP_RAKING:
      return state.set('UpRanking', action.UpRanking)
      case actionTypes.CHANGE_ORIGIN_RAKING:
        return state.set('OriginRanking', action.OriginRanking)
    default:
      return state
  }
}
export default reducer
