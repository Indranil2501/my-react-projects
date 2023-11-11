import { Route, Routes } from "react-router-dom"
import Unauthorised from '../components/common/unauthorised'

const MyAppRoutes = (props) => {
    <Routes>
        <Route path="/Unauthorised" element={<Unauthorised />}/>
        {/* <Route path="/Home" element={<PrivateRoute}/> */}
    </Routes>
}