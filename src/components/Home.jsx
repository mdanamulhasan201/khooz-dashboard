
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"

const Home = () => {
    const { role } = useSelector(state => state.auth)
    if (role === 'seller') return <Navigate to='/seller/dashboard' replace></Navigate>
    else if (role === 'admin') return <Navigate to='/admin/dashboard' replace></Navigate>
    else return <Navigate to='/login' replace></Navigate>

};

export default Home;