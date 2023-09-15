import axios from "axios";
import { useEffect, useState } from "react";
import './clima.css'

const Clima = () => {
  //     const [datosClima, setDatosClima] = useState([]);
  //     const apiKey = '3059a7b119msh6b9b9ad7bedbb2cp1fbbf6jsnf3eee3820554';
  //   useEffect(() => {
  //     axios.get('https://weatherapi-com.p.rapidapi.com/current.json?q=Tucuman', {
  //       headers: {
  //         'X-RapidAPI-Key': apiKey,
  //       },
  //     })
  //     .then(response => {
  //       setDatosClima(response.data.current.feelslike_c);
  //       console.log(response.data.current.feelslike_c);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching weather data:', error);
  //     });
  //   }, []);

  //   if (!datosClima) {
  //     return <p>Loading...</p>;
  //   }
  const apiKey = "3059a7b119msh6b9b9ad7bedbb2cp1fbbf6jsnf3eee3820554";
  const [datosClima, setDatosClima] = useState([]);

  const [infoClima, setInfoClima] = useState([]);

  const obtenerClima = async () => {
    try {
      const response = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/current.json?q=Tucuman",
        {
          headers: {
            "X-RapidAPI-Key": apiKey,
          },
        }
      );
      console.log(response.data.current);
      setDatosClima(response.data.current);
      setInfoClima(response.data.current.condition);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerClima();
  }, []);
  return (
    <>
      <aside className="contenedorClima">
        <div className="contenedorTituloClima">
        <h3>Clima</h3></div>
        <div className="contenedorIconClima">
          <img src={infoClima.icon} />
        </div>
        <div className="contenedorInfoClima">
        <div> Temperatura: {datosClima.temp_c} </div>
        <div>Sensacion termica: {datosClima.feelslike_c}</div>
        <div> Ultima actualizacio: {datosClima.last_udivdated}</div>
        </div>
      </aside>
    </>
  );
};

export default Clima;
