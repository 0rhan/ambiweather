import {TEMP_SPECTRUM_COLD, TEMP_SPECTRUM_ZERO, TEMP_SPECTRUM_CHILLY, TEMP_SPECTRUM_WARMLY, TEMP_SPECTRUM_HOT} from "./constants/tempSpectrumValues"
import {tempSpectrumStrings} from "./types/tempSpectrumStrings"


  export default function getCurrentTempSpectrumValue(temp: number): tempSpectrumStrings{
    // cold 
    if (temp < 0) {
      return TEMP_SPECTRUM_COLD;
    }
    // chilly
    if (temp > 0 && temp <= 10) {
      return TEMP_SPECTRUM_CHILLY;
    }
    // warmly
    if (temp > 10 && temp <= 20) {
      return  TEMP_SPECTRUM_WARMLY;
    }
    // hot
    if (temp > 20) {
      return TEMP_SPECTRUM_HOT;
    }
    return TEMP_SPECTRUM_ZERO;
};
