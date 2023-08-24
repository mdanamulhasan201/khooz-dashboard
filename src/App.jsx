import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from './router/routes/publicRoutes'
import { getRoutes } from "./router/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]) //state create and public route spread array

  useEffect(() => {
    const routes = getRoutes()
    setAllRoutes([...allRoutes, routes]) //routes mainly return korteche objet tai routes er modde (... spread Array use kora hoi nai)
    console.log(routes)
  }, [])
  return <Router allRoutes={allRoutes}></Router>
}

export default App;
