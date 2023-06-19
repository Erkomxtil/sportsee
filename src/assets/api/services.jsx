import { useState, useEffect } from "react"
import USER_ACTIVITY from "../mocked/activity"
import USER_MAIN_DATA from "../mocked/mainData"
import USER_AVERAGE_SESSIONS from "../mocked/averageSessions"
import USER_PERFORMANCE from "../mocked/performance"

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
