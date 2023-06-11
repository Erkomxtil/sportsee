import React, { useEffect } from "react"
import styled from "styled-components"
import colors from "../utils/style/colors"
import Error from "./Error"
import { Loader } from "../utils/style/Atoms"
import AllDatas from "../assets/api/datasFetch"

const MainDataWrapper = styled.div`
  padding: 68px 20px 88px 7.5%;
`
const HelloText = styled.p`
  font-size: 48px;
  margin-bottom: 41px;

  span {
    color: ${colors.red};
  }
`
const TextGreat = styled.p`
  font-size: 18px;
`

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

function MainData() {
  // console.log(infos)
  const { data, isloading, error } = AllDatas()
  const { data: USER_ACTIVITY } = AllDatas("activity")
  const { data: USER_AVERAGE_SESSIONS } = AllDatas("average")
  const { data: USER_PERFORMANCE } = AllDatas("performance")
  let userData = {}

  useEffect(() => {
    if (isloading === false) {
      /* User data */
      const { data: USER_MAIN_DATA } = data
      userData = USER_MAIN_DATA?.userInfos

      // console.log(USER_MAIN_DATA) /* données générales utilisateur */
      // console.log(userData) /* nom prénom âge */

      /* User calories, proteins, glucides et lipides */
      const allDatas = USER_MAIN_DATA?.keyData

      if (allDatas !== undefined) {
        const datasKey = Object.keys(allDatas).map(
          (key) => key + " " + allDatas[key]
        )
        console.log(datasKey)
      }

      /* User activity */
      const { data: sessions } = USER_ACTIVITY

      // console.log(sessions?.sessions.map((session) => session.day)) /* jour */
      // console.log(sessions?.sessions.map((session) => session.kilogram)) /* poid */
      // console.log(sessions?.sessions.map((session) => session.calories)) /* calories */

      /* User average */
      const { data: average } = USER_AVERAGE_SESSIONS
      // console.log(average?.sessions.map((length) => length.sessionLength))

      /* User performance */
      const { data: performance } = USER_PERFORMANCE
      const kinds = performance?.kind
      // console.log(performance?.data.map((value) => value.value))
      // console.log(performance?.data.map((value) => value.kind))
      if (kinds !== undefined) {
        const testy = Object.keys(kinds).map((key) => kinds[key])
        // console.log(testy)
      }
    }
  }, [MainDataWrapper])

  if (error) {
    return <Error>Il y a eu un problème lors du chargement des données</Error>
  }

  return (
    <MainDataWrapper>
      {isloading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <HelloText>
            Bonjour{" "}
            <span>
              {userData.firstName} {userData.lastName}
            </span>
          </HelloText>

          <TextGreat>
            Félicitation ! Vous avez explosé vos objetifs hier :👏
          </TextGreat>
        </>
      )}
    </MainDataWrapper>
  )
}

export default MainData
