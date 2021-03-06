import React, { memo } from "react"
import { HeaderWrapper } from "./style"
import PropTypes from 'prop-types'
function HYThemeHeaderRCM(props) {
  const { title, keyword } = props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className="left">
        <h3 className='title'>{title}</h3>
        <div className="keyword">
          {keyword.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
}

HYThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keyword:PropTypes.array
}
HYThemeHeaderRCM.defaultProps = {
  keyword:[]
}
export default memo(HYThemeHeaderRCM)
