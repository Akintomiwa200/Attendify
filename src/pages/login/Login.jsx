import { useContext, useState } from 'react';
import Input from '../../components/input/Input';
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(UserContext);
    const [matricNumber, setMatricNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const role = await login(matricNumber, password);
            if (role === 'admin') {
                navigate('/admin');
            } else if (role === 'teacher') {
                navigate('/teacher');
            } else if (role === 'student') {
                navigate('/user');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className='m-0 p-0 lg:h-[90vh] flex flex-col lg:flex-row justify-center items-center bg-gray-200'>
            <div className='w-[90vw] lg:w-[40vw] h-[90vh] lg:h-[70vh] flex flex-col justify-center items-left m-0 lg:p-0 p-8 text-justify'>
                <h1 className='text-3xl lg:text-[3.5em] m-0 lg:py-8 p-0 flex'>Attendance</h1>
                <h1 className='text-3xl lg:text-[3.5em] m-0 p-0 flex text-blue-900'>for your business</h1>
                <p className='w-[80vw] lg:w-[35vw] flex mt-[3em] text-justify break-all text-xs lg:text-xl'>
                    lorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlk
                </p>
            </div>
            <div className='w-[100vw] lg:w-[40vw] h-[100vh] lg:h-[70vh] flex justify-center items-center bg-white'>
                <div className="w-[80vw] lg:w-auto">
                    <form onSubmit={submitHandler}>
                        <label className='flex flex-col my-[0.5em]'>
                            Matric Number:<Input value={matricNumber} onChange={(e) => setMatricNumber(e.target.value)} />
                        </label>
                        <label className='flex flex-col my-[0.5em]'>
                            Password:<Input value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <span className='flex items-center m-0 gap-[1em] p-0'>
                            <Checkbox />
                            <label> Remember Me </label>
                        </span>
                        <Button name="Sign in" />
                    </form>
                    <span className='text-gray-500 my-[1em]'>
                        <a href="">forget password?</a>
                    </span>
                    <span className='flex items-center m-0 p-0 gap-[1em]'>
                        <h5>Don&apos;t have an account</h5><Link className='text-green-600' to="/signup">Register here</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
