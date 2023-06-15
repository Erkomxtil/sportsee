import styled from "styled-components"
import { Loader } from "../utils/style/Atoms"
import Activity from "./Activity"
import Hello from "./Hello"
import Sessions from "./Sessions"
import Performance from "./Performance"
import Score from "./Score"
import UserInfos from "./UserInfos"
import ActivityDataFormat, { FetchMainData } from "../assets/api/services"

const Container = styled.div`
  display: flex;

  @media (max-width: 1440px) {
    flex-direction: column-reverse;
    max-width: unset;
  }
`

const MainWrapper = styled.div``

const MainDataWrapper = styled.div`
  padding: 68px 20px 88px 7.5%;
  width: calc(100% - 117px);
`
const SessionsPerformanceScoreWrapper = styled.div`
  display: flex;
`
const AsideStyled = styled.aside`
  max-width: 258px;
  width: 100%;
  padding-left: 31px;

  @media (max-width: 1440px) {
    max-width: 835px;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
  }
`

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

function MainData() {
  const { isloading, userMainData, error } = FetchMainData(18, true)
  const userMainDataFormatted = new ActivityDataFormat(
    userMainData
  ).getMainDataFormatted()

  if (error) {
    return (
      <div>Il y a eu un problème lors de la connexion avec le serveur !</div>
    )
  }

  return (
    <MainDataWrapper>
      <>
        <Hello />
        <Container>
          <MainWrapper>
            <Activity />
            <SessionsPerformanceScoreWrapper>
              <Sessions />
              <Performance />
              <Score />
            </SessionsPerformanceScoreWrapper>
          </MainWrapper>
          {isloading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            <AsideStyled>
              {userMainDataFormatted &&
                userMainDataFormatted?.map((data) => (
                  <UserInfos
                    img={data.img}
                    info={data.info}
                    macronutrients={data.macronutrients}
                  />
                ))}
            </AsideStyled>
          )}
        </Container>
      </>
    </MainDataWrapper>
  )
}

export default MainData
