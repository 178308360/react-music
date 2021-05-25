import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import HYThemeHeaderRCM from "components/theme-header-rcm"
import  HYTopRanking from "components/top-ranking"

import { RankingWrapper } from "./style"
import { getTopListAction } from "../../store/actionCreators"

export default memo(function HYRecommendRanking() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  const { OriginRanking, NewRanking, UpRanking } = useSelector(
    (state) => ({
      OriginRanking: state.getIn(["recommend", "OriginRanking"]),
      UpRanking: state.getIn(["recommend", "UpRanking"]),
      NewRanking: state.getIn(["recommend", "NewRanking"])
    }),
    shallowEqual
  )
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="热门推荐"></HYThemeHeaderRCM>
      <div className="tops">
        <HYTopRanking info={UpRanking}></HYTopRanking>
        <HYTopRanking info={OriginRanking }></HYTopRanking>
        <HYTopRanking info={NewRanking }></HYTopRanking>
      </div>
    </RankingWrapper>
  )
})
