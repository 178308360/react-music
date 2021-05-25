import * as actionTypes from "./constants"

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList
} from "@/services/recommend"

 const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeBannerAction(res))
    })
  }
}

 const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

 const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

 const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RAKING,
  UpRanking: res.playlist
})
export const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RAKING,
  NewRanking: res.playlist
})
 const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RAKING,
  OriginRanking: res.playlist
})

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      if (idx === 0) {
        dispatch(changeUpRankingAction(res))
      }
      if (idx === 3) {
        dispatch(changeNewRankingAction(res))
      }
      if (idx === 2) {
        dispatch(changeOriginRankingAction(res))
      }
    })
  }
}
