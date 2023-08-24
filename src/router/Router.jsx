// routes handle this file
import {useRoutes } from 'react-router-dom'
const Router = ({allRoutes}) => {  //props route pass 
    const routes = useRoutes([...allRoutes]) //routes is a variable  (useRoutes pass all routes store in array)
    return routes
};

export default Router;