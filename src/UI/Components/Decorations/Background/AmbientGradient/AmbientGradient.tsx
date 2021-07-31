import style from "./ambientGradient.module.css";

/* Decorative component for acrylic background gradient */

//interface AmbientGradientProps {
//weatherCondition: "clear" | "cloudy";
//}

const AmbientGradient = () => {
  return (
    <div className={style.container}>
      <div className={style.gradientFilter}></div>
      <div className={style.weatherClear}></div>
    </div>
  );
};

export default AmbientGradient;
