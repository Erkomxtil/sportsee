import React from "react"
import styled from "styled-components"
import colors from "../utils/style/colors"
import yoga from "../assets/images/yoga.png"
import swim from "../assets/images/swim.png"
import bike from "../assets/images/bike.png"
import gym from "../assets/images/gym.png"

const VerticalWrapper = styled.div`
  width: 117px;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  padding: 0 23px;
  justify-content: center;
  position: relative;
  align-items: center;
`

const ImgLogo = styled.img`
  margin: 10px 0;

  @media (max-width: 1024px) {
    width: 48px;
  }
`

const TextCopy = styled.p`
  position: absolute;
  bottom: 1.5%;
  color: #ffffff;
  text-orientation: mixed;
  writing-mode: tb;
  transform: rotate(180deg) translateX(50%);
  text-align: center;
  left: 50%;
  font-size: 12px;

  @media (max-width: 1024px) {
    bottom: 12px;
  }
`

function VerticalMenu() {
  return (
    <VerticalWrapper>
      <ImgLogo src={yoga} alt="Logo yoga" />
      <ImgLogo src={swim} alt="Logo de natation" />
      <ImgLogo src={bike} alt="Logo de vélo" />
      <ImgLogo src={gym} alt="Logo d'altère" />
      <TextCopy>Copyright, SportSee 2020</TextCopy>
    </VerticalWrapper>
  )
}

export default VerticalMenu
