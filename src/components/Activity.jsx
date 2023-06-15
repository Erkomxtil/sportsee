import { FetchActivity } from "../assets/api/services"
import ActivityDataFormat from "../assets/api/services"
import styled from "styled-components"
import colors from "../utils/style/colors"
import { Loader } from "../utils/style/Atoms"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const ActivityWrapper = styled.div`
  max-width: 835px;
  width: 100%;
  position: relative;
  background: #fbfbfb;
  padding: 0 0 20px 40px;
  border-radius: 6px;

  .recharts-legend-wrapper {
    top: 0px !important;
    background: #fbfbfb;
    padding: 23px 40px 30px 0;
    width: calc(100% + 40px) !important;
    margin-left: -40px;
    border-radius: 6px;
  }
`

const ActivityTitle = styled.h2`
  position: absolute;
  top: 22px;
  left: 40px;
  font-size: 15px;
  z-index: 100;
`

const UlStyled = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #74798c;
  width: 100%;
`
const LiStyledBlack = styled.li`
  &::before {
    content: "•";
    color: #282d30;
    padding-right: 10px;
    font-size: 20px;
    position: absolute;
    top: -3px;
    left: -10px;
  }
  position: relative;
  padding-right: 32px;
  font-size: 14px;
`
const LiStyledRed = styled.li`
  &::before {
    content: "•";
    color: #e60000;
    font-size: 20px;
    position: absolute;
    top: -3px;
    left: -10px;
  }
  position: relative;
  font-size: 14px;
`

const TooltipWrapper = styled.div`
  background: ${colors.redBackground};
  color: ${colors.white};
  padding: 10px;
  text-align: center;
  font-size: 14px;

  p {
    margin-bottom: 20px;
  }
`

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

function Activity() {
  const { isloading, data, error } = FetchActivity(18, false)

  const dataActivityFormatted = new ActivityDataFormat(
    data
  ).getActivityFormatted()

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipWrapper>
          <p className="kilos">{`${payload[0].value}kg`}</p>
          <p className="calorie-number">{`${payload[1].value}Kcal`}</p>
        </TooltipWrapper>
      )
    }

    return null
  }

  const renderLegend = () => {
    return (
      <UlStyled>
        <LiStyledBlack>
          <span>Poids (kg)</span>
        </LiStyledBlack>
        <LiStyledRed>
          <span>Calories brûlées (Kcal)</span>
        </LiStyledRed>
      </UlStyled>
    )
  }

  if (error) {
    return (
      <div>Il y a eu un problème lors de la connexion avec le serveur !</div>
    )
  }

  return (
    <ActivityWrapper>
      <ActivityTitle>Activité quotidienne</ActivityTitle>
      {isloading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={dataActivityFormatted}
            maxBarSize={7}
            margin={{ top: 25, right: 0, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="2" vertical={false} height={300} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={16}
              tick={{ fontSize: 14, fontWeight: 500 }}
            />
            <YAxis
              yAxisId="kg"
              dataKey="kg"
              orientation="right"
              type="number"
              axisLine={false}
              tickLine={false}
              domain={["dataMin -1", "dataMax +1"]}
              allowDecimals={false}
              tick={{ fontSize: 14, fontWeight: 500 }}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              domain={[0, "dataMax"]}
              hide={true}
            />
            <Legend
              verticalAlign="top"
              iconSize={8}
              content={renderLegend}
              margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
            />

            <Bar
              yAxisId="kg"
              dataKey="kg"
              fill="#282d30"
              radius={[50, 50, 0, 0]}
              barSize={7}
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              fill="#e60000"
              radius={[50, 50, 0, 0]}
              barSize={7}
            />
            <Tooltip
              itemStyle={{ backgroundColor: "#E60000", color: "white" }}
              contentStyle={{ backgroundColor: "#E60000" }}
              content={<CustomTooltip active />}
              allowEscapeViewBox={{ x: true, y: true }}
              cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ActivityWrapper>
  )
}

export default Activity
