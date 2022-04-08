import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((response) => {
        setCharacters([...response.results]);
        setCurrentPage(response.info.next);
      })

      .catch((err) => console.log(err));
  }, []);

  function nextPage() {
    setPage(page + 1);
    console.log(page);

    if (page <= 42) {
      fetch(currentPage)
        .then((response) => response.json())
        .then((response) => {
          setCharacters([...characters, ...response.results]);
          setCurrentPage(response.info.next);
        })

        .catch((err) => console.log(err));
    } else {
      alert("As páginas acabaram");
    }
  }

  return (
    <div className="App">
      <Characters list={characters} />
      <button onClick={() => nextPage()}>next</button>
    </div>
  );
}
export default App;
