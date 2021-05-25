import React, { memo, useRef, useCallback, useState } from "react"
import { Carousel } from "antd"
import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from "./style"
import { useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getTopBannerAction } from "../../store/actionCreators"
export default memo(function HYTopBanner() {
  //state
  const [currentIndex, setcurrentIndex] = useState(0)
  //组件和redux关联:获取数据和进行操作
  //第二个参数性能优化 进行浅层比较,相等不重新渲染
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"])
    }),
    shallowEqual
  )
  //其他hooks
  const bannerRef = useRef()
  const dispatch = useDispatch()
  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setcurrentIndex(to)
  }, [])
  //其他业务逻辑
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay="true"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
