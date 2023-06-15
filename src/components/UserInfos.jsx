import { styled } from "styled-components"
import colors from "../utils/style/colors"

const MacronutrientsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 128px;
  background: #fbfbfb;
  margin-bottom: 39px;
  gap: 24px;
  padding-top: 32px;
  border-radius: 6px;
  img {
    height: 61px;
    width: 61px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    span {
      font-size: 14px;
      color: #74798c;
      font-weight: 500;
    }
  }
`

function UserInfos({ img, info, macronutrients }) {
  return (
    <MacronutrientsWrapper>
      <img src={img} alt="" />
      <p>
        {info} <br />
        <span>{macronutrients}</span>
      </p>
    </MacronutrientsWrapper>
  )
}

export default UserInfos
