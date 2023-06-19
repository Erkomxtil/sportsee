import { styled } from "styled-components"
import { FetchSessions } from "../assets/api/services"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts"
import { Loader } from "../utils/style/Atoms"
import { useContext, useEffect } from "react"
import { UserContext } from "../utils/context"
import ActivityDataFormat from "../assets/api/modelisation"

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const SessionsWrapper = styled.div`
  position: relative;
  margin-top: 28px;
  max-width: 258px;
  width: 100%;

  h2 {
    position: absolute;
    top: 29px;
    left: 34px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
    z-index: 100;
    line-height: 24px;
  }
`

const LineChartStyled = styled(LineChart)`
  &.recharts-wrapper {
    border-radius: 6px;
    background: #ff0000;
    padding-bottom: 10px;
  }

  .recharts-surface {
    border-radius: 6px;
  }

  .recharts-cartesian-axis-ticks tspan {
    fill: rgba(255, 255, 255, 0.6);
    font-size: 12px;
  }
`

const SessionTooltip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 25px;
  color: black;
  font-size: 8px;
  font-weight: 500;
  background-color: #ffffff;
`

function Sessions() {
  const { userId, dataMocked } = useContext(UserContext)
  const { isloading, sessionsData, error } = FetchSessions(userId, dataMocked)

  const sessionsdataFormatted = new ActivityDataFormat(
    sessionsData
  ).getSessionsFormatted()

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <SessionTooltip>
          <p>{`${payload[0].value} min`}</p>
        </SessionTooltip>
      )
    }
    return null
  }

  useEffect(() => {
    /* Ajustement des lettres L et D pour les sessions */
    if (!isloading) {
      const LabelL = document.querySelector(
        ".sessionsWrapper .recharts-cartesian-axis-tick:first-child text tspan"
      )
      const LabelD = document.querySelector(
        ".sessionsWrapper .recharts-cartesian-axis-tick:last-child text tspan"
      )
      if (LabelD !== null && LabelL !== null) LabelL?.setAttribute("x", 12)
      LabelD?.setAttribute("x", 247)
    }
  }, [isloading])

  if (error) {
    return (
      <div>Il y a eu un problème lors de la connexion avec le serveur !</div>
    )
  }

  return (
    <>
      {isloading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <SessionsWrapper className="sessionsWrapper">
          <h2>
            Durée moyenne des
            <br /> sessions
          </h2>
          <LineChartStyled
            width={258}
            height={263}
            data={sessionsdataFormatted}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            outerRadius="75%"
          >
            <CartesianGrid
              strokeDasharray="3"
              vertical={false}
              horizontal={false}
              fill="#FF0000"
            />
            <XAxis
              interval="preserveStartEnd"
              dataKey="day"
              axisLine={false}
              tickLine={false}
              mirror={true}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              hide
              padding={{ top: 100, bottom: 50 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 79 }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#ffffff"
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: "rgba(255, 255, 255, 0.198345)",
                strokeWidth: "10px",
                r: 5,
              }}
            />
          </LineChartStyled>
        </SessionsWrapper>
      )}
    </>
  )
}

export default Sessions
