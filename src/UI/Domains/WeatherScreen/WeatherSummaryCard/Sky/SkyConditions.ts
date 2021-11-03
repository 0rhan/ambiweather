import {
  DUST,
  FOG,
  HAZE,
  MIST,
  OVERCAST_CLOUDS,
  SAND,
  SAND_DUST_WHIRLS,
  SLEET,
  SMOKE,
  THUNDERSTORM,
} from "data/weatherConditions/conditionDescriptions";
import { WEATHER_CONDITION_MAPS } from "data/weatherConditions/weatherConditionCodes";
import {
  SkyClearDay,
  SkyCloudy,
  SkyDrizzle,
  SkyDust,
  SkyDustWind,
  SkyFog,
  SkyHaze,
  SkyMist,
  SkyOvercast,
  SkyRain,
  SkySleet,
  SkySmoke,
  SkySnow,
  SkyThunderstorm,
  SkyThunderstormWithRain,
} from "UI/Components/DataDisplay/Icons/WeatherSkyIcons";

const {
  THUNDERSTORMMAP,
  DRIZZLEMAP,
  RAINMAP,
  SNOWMAP,
  ATMOSPHEREMAP,
  CLEARSKYMAP,
  CLOUDSMAP,
} = WEATHER_CONDITION_MAPS;

const SkyConditions = new Map();

// THUNDERSTORM ICONS
THUNDERSTORMMAP.forEach((value, key) => {
  if (value === THUNDERSTORM) {
    SkyConditions.set(key, SkyThunderstorm);
  } else {
    SkyConditions.set(key, SkyThunderstormWithRain);
  }
});

// DRIZZLE ICONS
DRIZZLEMAP.forEach((value, key) => {
  SkyConditions.set(key, SkyDrizzle);
});

// RAIN ICONS
RAINMAP.forEach((value, key) => {
  SkyConditions.set(key, SkyRain);
});

//SNOW ICONS
SNOWMAP.forEach((value, key) => {
  if (value === SLEET) {
    SkyConditions.set(key, SkySleet);
  } else {
    SkyConditions.set(key, SkySnow);
  }
});

// ATMOSPHERE ICONS
ATMOSPHEREMAP.forEach((value, key) => {
  if (value === MIST) {
    SkyConditions.set(key, SkyMist);
  }
  if (value === SMOKE) {
    SkyConditions.set(key, SkySmoke);
  }
  if (value === HAZE) {
    SkyConditions.set(key, SkyHaze);
  }
  if (value === SAND_DUST_WHIRLS) {
    SkyConditions.set(key, SkyDustWind);
  }
  if (value === FOG) {
    SkyConditions.set(key, SkyFog);
  }
  if (value === SAND || value === DUST) {
    SkyConditions.set(key, SkyDust);
  }
});

// CLEAR SKY
CLEARSKYMAP.forEach((value, key) => {
  SkyConditions.set(key, SkyClearDay);
});

// CLOUDS
CLOUDSMAP.forEach((value, key) => {
  if (value === OVERCAST_CLOUDS) {
    SkyConditions.set(key, SkyOvercast);
  } else {
    SkyConditions.set(key, SkyCloudy);
  }
});

export default SkyConditions;
