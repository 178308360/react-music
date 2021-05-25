import React, { memo } from 'react'
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'
/**
 * 歌词页面
 */
export default memo(function HYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>INFO</h2>
          <h2>content</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>songs</h2>
          <h2>content</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
