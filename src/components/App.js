import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [adalabersData, setAdalabersData] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersData(response);
    });
  }, []);

  const htmlAdalabers = adalabersData.map((adalabersData, index) => (
    <tr key={index}>
      <td>{adalabersData.name}</td>
      <td>{adalabersData.counselor}</td>
      <td>{adalabersData.speciality}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Adalabers</h1>
      <table>
        {/* <!-- Fila de cabecera --> */}
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Primera fila --> */}
          <tr>{htmlAdalabers}</tr>
          {/* <!-- Segunda fila --> */}
          <tr>
            <td>Columa 1 de la fila 2</td>
            <td>Columa 2 de la fila 2</td>
            <td>Columa 3 de la fila 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
