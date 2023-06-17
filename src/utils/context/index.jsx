import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(12)
  const [dataMocked, setDataMocked] = useState(false)

  return (
    <UserContext.Provider value={{ userId, dataMocked }}>
      {children}
    </UserContext.Provider>
  )
}
