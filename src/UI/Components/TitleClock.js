import { Helmet, HelmetProvider } from "react-helmet-async";

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
