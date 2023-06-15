import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"
import { styled } from "styled-components"
import ActivityDataFormat, { FetchMainData } from "../assets/api/services"
import { Loader } from "../utils/style/Atoms"
import colors from "../utils/style/colors"

const ScoreWrapper = styled.div`
  height: 263px;
  width: 258px;
  background: #fbfbfb;
  border-radius: 6px;
  margin-top: 28px;
  margin-left: 30px;
  position: relative;
`

const ScoreTextWrapper = styled.div`
  h2 {
    position: absolute;
    top: 24px;
    left: 30px;
    z-index: 100;
    font-size: 15px;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #74798c;
    text-align: center;
    font-size: 14px;

    span {
      color: ${colors.black};
      font-size: 26px;
      line-height: 26px;
    }
  }
`

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

function Score() {
  const { isloading, userMainData, error } = FetchMainData(18, false)
  const scoreFormatted = new ActivityDataFormat(
    userMainData
  ).getScoreFormatted()

  if (error) {
    return (
      <div>Il y a eu un problème lors de la connexion avec le serveur !</div>
    )
  }

  return (
    <ScoreWrapper>
      {isloading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <ScoreTextWrapper>
            <h2>Score</h2>
            <p>
              <span>{scoreFormatted[0].value}%</span> <br />
              de votre <br />
              objectif
            </p>
          </ScoreTextWrapper>
          <ResponsiveContainer>
            <RadialBarChart
              innerRadius="71%"
              outerRadius="95%"
              data={scoreFormatted}
              startAngle={210}
              endAngle={-150}
            >
              <RadialBar
                minAngle={15}
                background={{ fill: "#FBFBFB" }}
                clockWise={true}
                dataKey="value"
                cornerRadius={50}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </>
      )}
    </ScoreWrapper>
  )
}

export default Score
