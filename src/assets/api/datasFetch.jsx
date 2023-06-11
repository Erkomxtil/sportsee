import { useFetch } from "../../utils/hook"

function AllDatas(pageUrl) {
  const id = 18
  const path = `http://localhost:3000/user/${id}`

  switch (pageUrl) {
    case "activity":
      pageUrl = "/activity"
      break
    case "average":
      pageUrl = "/average-sessions"
      break
    case "performance":
      pageUrl = "/performance"
      break
    default:
      pageUrl = ""
  }

  const { data, isloading, error } = useFetch(`${path}${pageUrl}`)

  return { data, isloading, error }
}

export default AllDatas
