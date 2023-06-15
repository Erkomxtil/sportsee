import ActivityDataFormat, { FetchMainData } from "../assets/api/services"
import colors from "../utils/style/colors"
import styled from "styled-components"
import { Loader } from "../utils/style/Atoms"

const HelloText = styled.div`
  font-size: 48px;
  margin-bottom: 41px;

  span {
    color: ${colors.red};
  }
`
const TextGreat = styled.p`
  font-size: 18px;
  margin-bottom: 77px;
`
const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

function Hello() {
  const { isloading, userMainData, error } = FetchMainData(12, false)
  const mainUserDataFormatted = new ActivityDataFormat(
    userMainData
  ).getUserMainDataFormatted()

  if (error) {
    return <div>Il y a eu un problème lors de la recherche !</div>
  }

  return (
    <>
      <HelloText>
        Bonjour{" "}
        {isloading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <span>{mainUserDataFormatted?.firstName}</span>
        )}
      </HelloText>
      <TextGreat>
        Félicitation ! Vous avez explosé vos objetifs hier :👏
      </TextGreat>
    </>
  )
}

export default Hello
