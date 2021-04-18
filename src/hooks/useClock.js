import { useState, useEffect } from "react";
import getCurrentTime from "../utils/getCurrentTime";

export default () => {
  const [time, setTime] = useState("00.00.000|00:00:00");

  useEffect(() => {
    const intervalID = setInterval(() => setTime(getCurrentTime()));
    return () => {
      clearInterval(intervalID);
    };
  }, [time]);

  return time
};
