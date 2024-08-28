import {Outlet} from 'react-router-dom'
import Header from '../../components/navbar/Header'

const MainLayout=()=>{
    return(
        <div className='overflow-x-hidden'>
            <Header/>
            <Outlet/>
        </div>
    )
}
export default MainLayout