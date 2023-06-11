import React from "react"
import logo from "../assets/images/logo-sportSee.png"
import styled from "styled-components"
import colors from "../utils/style/colors"

const HeaderWrapper = styled.header`
  background: ${colors.black};
  display: flex;
  align-items: center;
  font-size: 24px;
  justify-content: space-between;
  padding: 19px 6% 14px 2%;

  a {
    color: ${colors.white};
  }
`

function Header(props) {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo SportSee" />
      <a href="/">Accueil</a>
      <a href="/">Profil</a>
      <a href="/">Réglage</a>
      <a href="/">Communauté</a>
    </HeaderWrapper>
  )
}

export default Header
