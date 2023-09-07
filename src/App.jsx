import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from './router/routes/publicRoutes'
import { getRoutes } from "./router/routes";
import { useSelector, useDispatch } from 'react-redux'
import { get_user_info } from "./store/Reducers/authReducer";

function App() {

  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)

  const [allRoutes, setAllRoutes] = useState([...publicRoutes]) //state create and public route spread array

  useEffect(() => {
    const routes = getRoutes()
    setAllRoutes([...allRoutes, routes]) //routes mainly return korteche objet tai routes er modde (... spread Array use kora hoi nai)
    
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(get_user_info())
    }
  }, [token])
  return <Router allRoutes={allRoutes}></Router>
}

export default App;
