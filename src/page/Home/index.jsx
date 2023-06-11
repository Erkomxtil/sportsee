import React from "react"
import Header from "../../components/Header"
import VerticalMenu from "../../components/VerticalMenu"
import MainData from "../../components/MainData"
import "./home.scss"
import { useFetch } from "../../utils/hook"

function Home(props) {
  return (
    <>
      <Header />
      <main>
        <VerticalMenu />
        <MainData />
      </main>
    </>
  )
}

export default Home
