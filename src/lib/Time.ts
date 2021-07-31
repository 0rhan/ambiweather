interface PartsOfTheDay {
  [key: string]: {
    [key: string]: [number, number];
  };
}

class Time {
  partsOfTheDay: PartsOfTheDay = {
    morningParts: {
      earlyMorning: [3, 5],
      morning: [6, 8],
      lateMorning: [9, 11],
    },
    noonParts: {
      afterNoon: [13, 15],
      lateAfterNoon: [16, 17],
    },
    eveningParts: {
      earlyEvening: [18, 19],
      evening: [20, 21],
      lateEvening: [22, 23],
    },
    nightParts: {
      night: [0, 2],
    },
  };

  //static getHourRange(start: number, end: number): Array {}

  public getCurrentTime(locale: string): string {
    return new Date().toLocaleTimeString(locale);
  }

  public getCurrentDate(locale: string): string {
    return new Date().toLocaleDateString(locale);
  }

  public getCurrentHour(): number {
    return new Date().getHours();
  }

  public getCurrentDateTime(timeLocale: string, dateLocale: string): string {
    const currentLocaleDate = this.getCurrentDate(dateLocale);
    const currentLocaleTime = this.getCurrentTime(timeLocale);

    return `${currentLocaleDate}|${currentLocaleTime}`;
  }

  public getTimeOfDay(currentHour: number = this.getCurrentHour()) {
    for (const dayPartName in this.partsOfTheDay) {
      const timeOfDay = this.partsOfTheDay[dayPartName];
      for (const timeOfDaySubpart in timeOfDay) {
        const hoursRange = timeOfDay[timeOfDaySubpart];
        if (currentHour >= hoursRange[0] && currentHour <= hoursRange[1]) {
          return timeOfDaySubpart;
        }
      }
    }
    return "Error";
  }
}

export default Time;
