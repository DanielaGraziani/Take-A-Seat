import React from 'react'
// import { useState } from 'react/cjs/react.production.min'
import MoviesGrid from '../components/MoviesGrid'
import SearchBar from '../components/SearchBar'
import { useQuery } from '../hooks/useQuery';


/* Pagina principal, renderiza el la barra de busqueda y las peliculas */
function LandingPage() {
  const query = useQuery();
  const searchQuery = query.get("search");

  /* Aca va el navbar */
  return (
    <>
    <SearchBar/>  
    <MoviesGrid key={searchQuery} search={searchQuery}/>
    </>
  )
}

export default LandingPage