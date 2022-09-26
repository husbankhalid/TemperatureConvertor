import { useState, useEffect } from 'react';

function App() {
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(32);
  const [tempK, setTempK] = useState(273);
  const [updated, setUpdate] = useState('');

  function updateTempC (e) {
    setTempC(e.target.value);
    setUpdate('C');
  }

  function updateTempF (e) {
    setTempF(e.target.value);
    setUpdate('F');
  }

  function updateTempK (e) {
    setTempK(e.target.value);
    setUpdate('K');
  }

  useEffect(() => {
    if(updated === 'C') {
      const fahrenheit = (tempC * 1.8) + 32;
      const kelvin = + tempC + 273;
      setTempF(fahrenheit);
      setTempK(kelvin);
    } else if(updated === 'F') {
      const centigrade = (tempF - 32) / 1.8;
      const kelvin = centigrade - 273;
      setTempC(centigrade);
      setTempK(kelvin);
    } else {
      const centigrade = tempK - 273;
      const fahrenheit = (centigrade * 1.8) + 32;
      setTempC(centigrade);
      setTempF(fahrenheit);
    }
  }, [updated, tempC, tempF, tempK]);

  return(
    <div className='container'>
      <h1 className='header'>Temperature Convertor</h1>
      <div>
        <h3>Centigrade</h3>
        <input onChange={(e) => updateTempC(e)} value={tempC}></input>
      </div>
      <div>
        <h3>Fahrenheit</h3>
        <input onChange={(e) => updateTempF(e)} value={tempF}></input>
      </div>
      <div>
        <h3>Kelvin</h3>
        <input onChange={(e) => updateTempK(e)} value={tempK}></input>
      </div>
    </div>
  )
}

export default App;