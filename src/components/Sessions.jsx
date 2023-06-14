import { styled } from "styled-components"
import ActivityDataFormat, { FetchSessions } from "../assets/api/services"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts"
import colors from "../utils/style/colors"

const SessionsWrapper = styled.div`
  position: relative;
  margin-top: 30px;

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
  const { isloading, sessionsData, error } = FetchSessions(18, false)

  const sessionsdataFormatted = new ActivityDataFormat(
    sessionsData
  ).getSessionsFormatted()
  console.log(sessionsdataFormatted)

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

  /* Ajustement des lettres L et D pour les sessions */
  if (!isloading) {
    const LabelL = document.querySelector(
      ".sessionsWrapper .recharts-cartesian-axis-tick:first-child text tspan"
    )
    const LabelD = document.querySelector(
      ".sessionsWrapper .recharts-cartesian-axis-tick:last-child text tspan"
    )
    LabelD?.setAttribute("x", 247)
    console.log(LabelL)
  }

  return (
    <SessionsWrapper className="sessionsWrapper">
      <h2>
        Durée moyenne des
        <br /> sessions
      </h2>
      <LineChartStyled
        width={258}
        height={250}
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
  )
}

export default Sessions
