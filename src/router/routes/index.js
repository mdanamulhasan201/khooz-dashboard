// all routes functionality handle

import { privateRoutes } from "./privateRoutes";
import MainLayout from '../../layout/MainLayout'

export const getRoutes = () =>{

    return {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:  privateRoutes
    }
}
