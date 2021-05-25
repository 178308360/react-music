import React, { memo } from "react"
import { Content, RecommendLeft, RecommendRight, RecommendWrapper } from "./style"
import HYTopBanner from "./c-cpns/top-banner"
import HYHotRecommend from "./c-cpns/hot-recommend"
import HYNewAlbum from "./c-cpns/new-album"
import HYRecommendRanking from "./c-cpns/recommend-ranking"
import HYHotAnchor from './c-cpns/hot-anchor'
import HYSettleSinger from './c-cpns/settle-singer'
import HYUserLogin from './c-cpns/user-login'

// import { useEffect } from "react"
// import { connect, useDispatch, useSelector, shallowEqual } from "react-redux"
// import { getTopBannerAction } from "./store/actionCreators"
// function HYRecommend(props) {
//   const { getBanners,topBanners } = props
//   useEffect(() => {
//     getBanners()
//   },[])
//   return <div>{ topBanners.length}</div>
// }

// const mapStateToProps = state => ({
//   topBanners:state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => (
//   {
//     getBanners: () => {
//       dispatch(getTopBannerAction)
//     }
//   }
// )
// export default connect(mapStateToProps, mapDispatchToProps)(
//   memo(
//     HYRecommend
//   )
// )

//redux中hooks的使用
export default memo(function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HYHotRecommend></HYHotRecommend>
          <HYNewAlbum></HYNewAlbum>
          <HYRecommendRanking></HYRecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          <HYUserLogin></HYUserLogin>
          <HYSettleSinger></HYSettleSinger>
          <HYHotAnchor></HYHotAnchor>
        </RecommendRight>
      </Content>
    </RecommendWrapper>

  )
})
