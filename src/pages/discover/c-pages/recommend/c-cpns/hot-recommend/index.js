import React, { memo ,useEffect} from "react"
import { shallowEqual, useDispatch,useSelector} from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT } from '@/common/contants'
import HYThemeHeaderRCM from "components/theme-header-rcm"
import HYSongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from "./style"
export default memo(function HYHotRecommend() {

  const { hotRecommends } = useSelector(state =>({
    hotRecommends: state.getIn(['recommend', 'hotRecommends']),
  }),shallowEqual)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    },[dispatch]
  )
  return <HotRecommendWrapper>
    <HYThemeHeaderRCM title='热门推荐' keyword= {['华语','民谣','摇滚','电子','流行']}></HYThemeHeaderRCM>
    <div className="recommend-list">
      {
        hotRecommends.map((item)=>{
          return <HYSongsCover key={item.id} info={item}>
          </HYSongsCover>
        })
      }
    </div>
  </HotRecommendWrapper>
})  
