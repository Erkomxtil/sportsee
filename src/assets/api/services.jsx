import { useState, useEffect } from "react"
import USER_ACTIVITY from "../mocked/activity"
import USER_MAIN_DATA from "../mocked/mainData"
import USER_AVERAGE_SESSIONS from "../mocked/averageSessions"
import USER_PERFORMANCE from "../mocked/performance"
import fire from "../images/fire.png"
import chicken from "../images/chicken.png"
import apple from "../images/apple.png"
import burger from "../images/burger.png"

export function FetchMainData(id, mocked) {
  const [userMainData, setUserMainData] = useState()
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `http://localhost:3000/user/${id}`

  useEffect(() => {
    if (mocked) {
      const userMainDataMocked = USER_MAIN_DATA.find((el) => el.id === id)

      setLoading(false)
      setUserMainData(userMainDataMocked)
    } else {
      if (!url) return
      setLoading(true)

      async function fetchMainUserData() {
        try {
          const response = await fetch(url)
          const data = await response.json()
          const { data: userInfos } = data

          setUserMainData(userInfos)
        } catch (error) {
          console.log(error)
          setError(true)
        } finally {
          setLoading(false)
        }
      }
      fetchMainUserData()
    }
  }, [id, mocked, url])

  return { isloading, userMainData, error }
}

export function FetchActivity(id, mocked) {
  const [data, setData] = useState()
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `http://localhost:3000/user/${id}/activity`

  useEffect(() => {
    if (mocked) {
      const userActivityMocked = USER_ACTIVITY.find((el) => el.userId === id)
      setLoading(false)
      setData(userActivityMocked.sessions)
    } else {
      if (!url) return
      setLoading(true)

      async function fetchData() {
        try {
          const response = await fetch(url)
          const data = await response.json()
          const { data: sessions } = data

          setData(sessions.sessions)
        } catch (error) {
          console.log(error)
          setError(true)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    }
  }, [id, mocked, url])

  return { isloading, data, error }
}

export function FetchSessions(id, mocked) {
  const [sessionsData, setSessionsData] = useState()
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `http://localhost:3000/user/${id}/average-sessions`

  useEffect(() => {
    if (mocked) {
      const sessionsDataMocked = USER_AVERAGE_SESSIONS.find(
        (el) => el.userId === id
      )
      setLoading(false)
      setSessionsData(sessionsDataMocked.sessions)
    } else {
      if (!url) return
      setLoading(true)

      async function fetchData() {
        try {
          const response = await fetch(url)
          const data = await response.json()
          const { data: sessions } = data

          setSessionsData(sessions.sessions)
        } catch (error) {
          console.log(error)
          setError(true)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    }
  }, [id, mocked, url])

  return { isloading, sessionsData, error }
}

export function FetchPerformance(id, mocked) {
  const [performanceData, setPerformanceData] = useState()
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const url = `http://localhost:3000/user/${id}/performance`

  useEffect(() => {
    if (mocked) {
      const performanceDataMocked = USER_PERFORMANCE.find(
        (el) => el.userId === id
      )
      setLoading(false)
      setPerformanceData(performanceDataMocked)
    } else {
      if (!url) return
      setLoading(true)

      async function fetchData() {
        try {
          const response = await fetch(url)
          const data = await response.json()
          const { data: sessions } = data

          setPerformanceData(sessions)
        } catch (error) {
          console.log(error)
          setError(true)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    }
  }, [id, mocked, url])

  return { isloading, performanceData, error }
}

export default class ActivityDataFormat {
  constructor(datas) {
    this.data = datas
  }

  getUserMainDataFormatted() {
    const mainUserDataFormatted = this.data?.userInfos

    return mainUserDataFormatted
  }

  getActivityFormatted() {
    const dataFormatted = this.data?.map((el) => {
      return {
        day: el.day.substring(el.day.length - 1),
        kg: el.kilogram,
        calories: el.calories,
      }
    })

    return dataFormatted
  }

  getSessionsFormatted() {
    const sessionsFormatted = this.data?.map((el) => {
      let dayFormatted = ""
      switch (el.day) {
        case 1:
          dayFormatted = "L"
          break
        case 2:
          dayFormatted = "M"
          break
        case 3:
          dayFormatted = "M"
          break
        case 4:
          dayFormatted = "J"
          break
        case 5:
          dayFormatted = "V"
          break
        case 6:
          dayFormatted = "S"
          break
        case 7:
          dayFormatted = "D"
          break
        default:
      }

      return {
        day: dayFormatted,
        sessionLength: el.sessionLength,
      }
    })

    return sessionsFormatted
  }

  getPerformanceFormatted() {
    const dataFormatted = this.data?.data.map((el) => {
      const performance = el.kind
      let performanceFormatted = ""
      let valueFormatted = 0
      switch (performance) {
        case 6:
          performanceFormatted = "Cardio"
          valueFormatted = el.value
          break
        case 5:
          performanceFormatted = "Energie"
          valueFormatted = el.value
          break
        case 4:
          performanceFormatted = "Endurance"
          valueFormatted = el.value
          break
        case 3:
          performanceFormatted = "Force"
          valueFormatted = el.value
          break
        case 2:
          performanceFormatted = "Vitesse"
          valueFormatted = el.value
          break
        case 1:
          performanceFormatted = "Intensité"
          valueFormatted = el.value
          break
        default:
      }

      return {
        subject: performanceFormatted,
        A: valueFormatted,
        fullMark: 150,
      }
    })

    return dataFormatted
  }

  getScoreFormatted() {
    const scoreFormatted = this.data?.todayScore

    return [
      {
        name: "show score",
        value: scoreFormatted * 100,
        fill: "#FF0000",
      },
      {
        name: "no score",
        value: 100,
        fill: "#FBFBFB",
      },
    ]
  }

  getMainDataFormatted() {
    const mainDataFormatted = this.data?.keyData
    console.log(mainDataFormatted)

    return [
      {
        info: `${mainDataFormatted?.calorieCount}kCal`,
        macronutrients: "Calories",
        img: fire,
      },
      {
        info: `${mainDataFormatted?.proteinCount}g`,
        macronutrients: "Proteines",
        img: chicken,
      },
      {
        info: `${mainDataFormatted?.carbohydrateCount}g`,
        macronutrients: "Glucides",
        img: apple,
      },
      {
        info: `${mainDataFormatted?.lipidCount}g`,
        macronutrients: "Glucides",
        img: burger,
      },
    ]
  }
}

// function AllDatas(pageUrl) {
//   switch (pageUrl) {
//     case "activity":
//       pageUrl = "/activity"
//       break
//     case "average":
//       pageUrl = "/average-sessions"
//       break
//     case "performance":
//       pageUrl = "/performance"
//       break
//     default:
//       pageUrl = ""
//   }

//   const { data, isloading, error } = useFetch(`${path}${pageUrl}`)

//   return { data, isloading, error }
// }
