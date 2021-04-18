import { Helmet, HelmetProvider } from "react-helmet-async";
import useClock from "../../hooks/useClock";

const TitleClock = () => {

  const time = useClock();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{time}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default TitleClock;
