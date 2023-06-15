import { styled } from "styled-components"
import ActivityDataFormat, { FetchPerformance } from "../assets/api/services"
import colors from "../utils/style/colors"
import { Loader } from "../utils/style/Atoms"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"

const PerformanceWrapper = styled.div`
  margin-top: 28px;
  margin-left: 30px;
  background: #282d30;
  border-radius: 6px;

  tspan {
    fill: ${colors.white};
  }
`
const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

function Performance() {
  const { isloading, performanceData, error } = FetchPerformance(18, false)

  const performanceDataFormatted = new ActivityDataFormat(
    performanceData
  ).getPerformanceFormatted()

  if (error) {
    return (
      <div>Il y a eu un problème lors de la connexion avec le serveur !</div>
    )
  }

  return (
    <PerformanceWrapper>
      {isloading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <RadarChart
          outerRadius={75}
          width={258}
          height={263}
          data={performanceDataFormatted}
          stroke="white"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 12, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            dy={4}
            fill="#FFFFFF"
          />
          <Radar
            dataKey="A"
            fill="#FF0101"
            fillOpacity={0.7}
            domain={[0, "dataMax"]}
            stroke="transparent"
          />
        </RadarChart>
      )}
    </PerformanceWrapper>
  )
}

export default Performance
