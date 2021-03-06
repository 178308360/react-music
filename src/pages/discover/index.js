import React, { memo } from "react"
import { DiscoverWrapper, TopMenu } from "./style"
import { dicoverMenu } from "@/common/local-data"
import { NavLink } from "react-router-dom"
import { renderRoutes } from "react-router-config"
export default memo(function HYDiscover(props) {
  const { route } = props

  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {dicoverMenu.map((item) => {
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })}
          </TopMenu>
        </div>
        {renderRoutes(route.routes)}
      </DiscoverWrapper>
    </div>
  )
})
