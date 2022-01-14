interface CODE_RANGES {
  [conditionname: string]: {
    min: number;
    max: number;
  };
}

const CONDITION_CODES: CODE_RANGES = {
  THUNDERSTORM: { min: 200, max: 232 },
  DRIZZLE: { min: 300, max: 321 },
  RAIN: { min: 500, max: 531 },
  SNOW: { min: 600, max: 622 },
  ATMOSPHERE: { min: 700, max: 781 },
  CLEAR: { min: 800, max: 800 },
  CLOUDS: { min: 801, max: 804 },
};

export default CONDITION_CODES;
