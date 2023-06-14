import styled from "styled-components"
import colors from "../utils/style/colors"
// import { Loader } from "../utils/style/Atoms"
import Activity from "./Activity"
import Hello from "./Hello"
import Sessions from "./Sessions"

const MainDataWrapper = styled.div`
  padding: 68px 20px 88px 7.5%;
  width: calc(100% - 117px);
`

function MainData() {
  // console.log(infos)
  // const { data, isloading, error } = AllDatas()
  // const { data: USER_ACTIVITY } = AllDatas("activity")
  // const { data: USER_AVERAGE_SESSIONS } = AllDatas("average")
  // const { data: USER_PERFORMANCE } = AllDatas("performance")
  // let userData = useRef({})
  // const isloading = false

  // useEffect(() => {
  //   if (isloading === false) {
  //     /* User data */
  //     const { data: USER_MAIN_DATA } = data
  //     userData.current = USER_MAIN_DATA?.userInfos

  //     // console.log(USER_MAIN_DATA) /* données générales utilisateur */
  //     // console.log(userData) /* nom prénom âge */

  //     /* User calories, proteins, glucides et lipides */
  //     const allDatas = USER_MAIN_DATA?.keyData

  //     if (allDatas !== undefined) {
  //       const datasKey = Object.keys(allDatas).map(
  //         (key) => key + " " + allDatas[key]
  //       )
  //       // console.log(datasKey)
  //     }

  //     /* User activity */
  //     // const { data: sessions } = USER_ACTIVITY
  //     // console.log(sessions?.sessions)

  //     // console.log(sessions?.sessions.map((session) => session.day)) /* jour */
  //     // console.log(sessions?.sessions.map((session) => session.kilogram)) /* poid */
  //     // console.log(sessions?.sessions.map((session) => session.calories)) /* calories */

  //     /* User average */
  //     const { data: average } = USER_AVERAGE_SESSIONS
  //     // console.log(average?.sessions.map((length) => length.sessionLength))

  //     /* User performance */
  //     const { data: performance } = USER_PERFORMANCE
  //     const kinds = performance?.kind
  //     // console.log(performance?.data.map((value) => value.value))
  //     // console.log(performance?.data.map((value) => value.kind))
  //     if (kinds !== undefined) {
  //       const testy = Object.keys(kinds).map((key) => kinds[key])
  //       // console.log(testy)
  //     }
  //   }
  // }, [USER_AVERAGE_SESSIONS, USER_PERFORMANCE, data, isloading])

  // if (error) {
  //   return <Error>Il y a eu un problème lors du chargement des données</Error>
  // }

  return (
    <MainDataWrapper>
      <>
        <Hello />
        <Activity />
        <Sessions />
      </>
    </MainDataWrapper>
  )
}

export default MainData
