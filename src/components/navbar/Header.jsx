import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className='bg-white h-[10vh] flex items-center justify-between mx-[4em]'>
                <Link to='/'><h2 className='text-blue-700 text-xl lg:text-[2em]'>Attendify</h2></Link>
            </div>
        </>
    )
}
export default Header