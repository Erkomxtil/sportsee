import fire from "../images/fire.png"
import chicken from "../images/chicken.png"
import apple from "../images/apple.png"
import burger from "../images/burger.png"

export default class ActivityDataFormat {
  constructor(datas) {
    this.data = datas
  }

  getUserMainDataFormatted() {
    const mainUserDataFormatted = this.data?.userInfos

    return mainUserDataFormatted
  }

  getActivityFormatted() {
    const dataFormatted = this.data?.map((el) => {
      return {
        day: el.day.substring(el.day.length - 1),
        kg: el.kilogram,
        calories: el.calories,
      }
    })

    return dataFormatted
  }

  getSessionsFormatted() {
    const sessionsFormatted = this.data?.map((el) => {
      let dayFormatted = ""
      switch (el.day) {
        case 1:
          dayFormatted = "L"
          break
        case 2:
          dayFormatted = "M"
          break
        case 3:
          dayFormatted = "M"
          break
        case 4:
          dayFormatted = "J"
          break
        case 5:
          dayFormatted = "V"
          break
        case 6:
          dayFormatted = "S"
          break
        case 7:
          dayFormatted = "D"
          break
        default:
      }

      return {
        day: dayFormatted,
        sessionLength: el.sessionLength,
      }
    })

    return sessionsFormatted
  }

  getPerformanceFormatted() {
    const dataFormatted = this.data?.data.map((el) => {
      const performance = el.kind
      let performanceFormatted = ""
      let valueFormatted = 0
      switch (performance) {
        case 6:
          performanceFormatted = "Cardio"
          valueFormatted = el.value
          break
        case 5:
          performanceFormatted = "Energie"
          valueFormatted = el.value
          break
        case 4:
          performanceFormatted = "Endurance"
          valueFormatted = el.value
          break
        case 3:
          performanceFormatted = "Force"
          valueFormatted = el.value
          break
        case 2:
          performanceFormatted = "Vitesse"
          valueFormatted = el.value
          break
        case 1:
          performanceFormatted = "Intensité"
          valueFormatted = el.value
          break
        default:
      }

      return {
        subject: performanceFormatted,
        A: valueFormatted,
        fullMark: 150,
      }
    })

    return dataFormatted
  }

  getScoreFormatted() {
    const scoreFormatted = this.data?.todayScore

    return [
      {
        name: "show score",
        value: scoreFormatted * 100,
        fill: "#FF0000",
      },
      {
        name: "no score",
        value: 100,
        fill: "#FBFBFB",
      },
    ]
  }

  getMainDataFormatted() {
    const mainDataFormatted = this.data?.keyData

    return [
      {
        info: `${mainDataFormatted?.calorieCount}kCal`,
        macronutrients: "Calories",
        img: fire,
      },
      {
        info: `${mainDataFormatted?.proteinCount}g`,
        macronutrients: "Proteines",
        img: chicken,
      },
      {
        info: `${mainDataFormatted?.carbohydrateCount}g`,
        macronutrients: "Glucides",
        img: apple,
      },
      {
        info: `${mainDataFormatted?.lipidCount}g`,
        macronutrients: "Glucides",
        img: burger,
      },
    ]
  }
}
