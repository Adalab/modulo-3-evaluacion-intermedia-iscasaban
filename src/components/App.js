import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [adalabersData, setAdalabersData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });
  const [filterName, setFilterName] = useState('');
  const [filterCounselor, setFilterCounselor] = useState('All');

  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersData(response.results);
    });
  }, []);

  const handleChangeName = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      name: ev.currentTarget.value,
    });
  };

  const handleChangeCounselor = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      counselor: ev.currentTarget.value,
    });
  };

  const handleChangespeciality = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      speciality: ev.currentTarget.value,
    });
  };

  const handleClickNewAdalaber = () => {
    newAdalaber.id = adalabersData.length;

    setAdalabersData([...adalabersData, newAdalaber]);
    setNewAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    });
  };

  const handleChangeFilterName = (ev) => {
    setFilterName(ev.currentTarget.value);
  };

  const handleChangeFilterCounselor = (ev) => {
    setFilterCounselor(ev.currentTarget.value);
  };

  const htmlAdalabers = adalabersData
    .filter((eachAdalaber) =>
      eachAdalaber.name
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase())
    )
    .filter((eachAdalaber) => {
      if (filterCounselor === 'All') {
        return true;
      } else if (filterCounselor === eachAdalaber.counselor) {
        return true;
      } else {
        return false;
      }
    })
    .map((adalabersData, index) => (
      <tr key={index}>
        <td>{adalabersData.name}</td>
        <td>{adalabersData.counselor}</td>
        <td>{adalabersData.speciality}</td>
      </tr>
    ));

  return (
    <div>
      <header>
        <h1 className="title">Adalabers Promo 🥔</h1>
      </header>
      <main>
        <form action="" className="filters">
          <label htmlFor="name" className="form__text">
            Nombre:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ej. Patatita"
              className="form__input"
              value={filterName}
              onChange={handleChangeFilterName}
            />
          </label>
          <label htmlFor="counselor" className="form__text">
            Escoge una tutora:
            <select
              className="form__input"
              name="counselor"
              id="counselor"
              onChange={handleChangeFilterCounselor}
              value={filterCounselor}
            >
              <option value="All">Cualquiera</option>
              <option value="Dayana">Dayana</option>
              <option value="Iván">Iván</option>
              <option value="Yanelis">Yanelis</option>
            </select>
          </label>
        </form>
      </main>
      <table className="adalabers__list">
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
          {htmlAdalabers}
        </tbody>
      </table>
      <section>
        <h2 className="subtitle">Añadir una Adalaber</h2>
        <form
          action=""
          className="form__title"
          onSubmit={(ev) => ev.preventDefault()}
        >
          <label className="form__text" htmlFor="name">
            Nombre:
            <input
              type="text"
              className="form__input"
              value={newAdalaber.name}
              name="name"
              id="id"
              placeholder="Patatita"
              onChange={handleChangeName}
            />
          </label>
          <label className="form__text" htmlFor="counselor">
            Tutora:
            <input
              type="text"
              className="form__input"
              value={newAdalaber.counselor}
              name="name"
              id="id"
              placeholder="Maestro Jedi"
              onChange={handleChangeCounselor}
            />
          </label>
          <label className="form__text" htmlFor="speciality">
            Especialidad:
            <input
              type="text"
              className="form__input"
              value={newAdalaber.speciality}
              name="name"
              id="id"
              placeholder="Tu superpoder"
              onChange={handleChangespeciality}
            />
          </label>
          <button className="form__btn" onClick={handleClickNewAdalaber}>
            Añadir una nueva Adalaber
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
