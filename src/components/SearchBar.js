import React from "react";
import s from "../components/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";




/* Con la funcion handleSubmit queremos que agregue la info de la busqueda en la ruta*/
function SearchBar() {
  const query = useQuery();
  const search = query.get("search");
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
 

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);



  /* Con history push anadimos el query params mas el valor de busqueda ingresado por el usario */
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };


  return (
    <form className={s.searchContainer} onSubmit={handleSubmit}>
      <div className={s.searchBox}>
        <input
          className={s.searchInput}
          type="text"
          value={searchText}
          placeholder="Search for movies..."
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        />
        <button className={s.searchButton} type="submit">
          <FaSearch size={20}/>
        </button>
      </div>
    </form>
  );
}

/* Anado el estado searchtext para que el valor del input lo tenga ese estado, y si queremos que cambie usamos el onchange con el setSearchText y capturamos el valor del texto con el target.value */

export default SearchBar;
