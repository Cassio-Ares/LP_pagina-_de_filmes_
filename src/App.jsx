import { Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import MovieDetails from "./views/MovieDetails/MovieDetails";

import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState('')

/**
 * para carregar uma dados gerados em um filho para elemento pai:
 * 
 * no header criamos o elemento e demos a ele uma props "props.onSubmit(searchValue);"
 * aqui precisamos pegar estes dados e para carregar dados usamos o useState
 * 
 * a props é um submit então recriamos aqui "onSubmit={(inputValue)=> setSearchValue(inputValue) }"
 * 
 * props submit irá receber um parametro que é o valor de submit e vai passar o dado para dentro do state
 * 
 * agora estando no state podemos fazer o que quisermos.
 * 
 *  agora possa passar como um props este dado para onde eu quiser 
 *                                    como no exemplo:   <Home searchValue={searchValue} />
 * 
 *                                     OBS nome da props é indiferente o importante é o nome dentro das chaves 
 * 
 */

  return (
    <div className="App" style={{ background: "#303030" }}>
      <Header onSubmit={(inputValue)=> setSearchValue(inputValue) }   />
      <Routes>
        <Route path="/" element={<Home searchValueProps={searchValue} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}
  
export default App;

/**
 *
 * import { Routes, Route } from "react-router-dom";
 *
 * <Header/>
 *     <Routes>
 *      <Route path="/"   element={<Home/>}/>
 *     <Route path="/movie/:id" element={<MovieDetails/>}/>
 *  </Routes>
 * 
 * outra forma de montar rotas para poder trazer dados de um elemnto filho para um elemento Pai
 * 
 * (Nunca se monta Logica no Main) por isso montamos esta estrutura e mudamos a forma de montar o 
 * as rotas
 *
 */
