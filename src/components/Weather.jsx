import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true"
      );

      const data = await res.json();
      setWeather(data.current_weather);
    }

    fetchWeather();
  }, []);

  if (!weather) return <div>로딩중...</div>;

  return (
    <div>
      <p>서울 날씨 {weather.temperature}°C</p>
    </div>
  );
}