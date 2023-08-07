import "./styles.css";

import { useEffect, React, useState } from "react";
import Autosearch from "./Autoserach";

export default function App() {
  const [data, setData] = useState();
  const [childData, setChildData] = useState("");
  const [loading, setLoading] = useState(false);

  function callback(childData) {
    setChildData(childData);
  }
  useEffect(() => {
    setLoading(true);
    const weatherData = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${childData}&appid=189806bc41ff897c5bbc6c861dd1cf97`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not on");
          }
          return response.json();
        })
        .then((jsonData) => {
          setData(jsonData);
        })
        .catch((err) => {
          console.log("error while fetching data", err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    weatherData();
  }, [childData]);
  if (loading) {
    return (
      <div className="App">
        <h1>{data?.visibility}</h1>
        <h1>{childData}</h1>
        <Autosearch handleCallback={callback} />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Autosearch handleCallback={callback} />
      <h1>Today's weather in {data?.name}</h1>
      <h2>{data?.visibility}</h2>
      <h2>{data?.weather[0]?.description}</h2>
    </div>
  );
}
