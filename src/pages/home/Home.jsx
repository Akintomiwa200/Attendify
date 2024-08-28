import { useContext, useState } from 'react';
import Input from '../../components/input/Input';
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Home = () => {
    const { login } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!role) {
            setError('Please select a role.');
            return;
        }
        try {
            const userRole = await login(username, password);
            if (userRole === 'admin') {
                navigate('/admin');
            } else if (userRole === 'teacher') {
                navigate('/teacher');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className='m-0 p-0 lg:h-[90vh] flex flex-col lg:flex-row justify-center items-center bg-gray-200 overflow-x-hidden'>
            <div className='w-[90vw] lg:w-[40vw] h-[90vh] lg:h-[70vh] flex flex-col justify-center items-left m-0 lg:p-0 p-8 text-justify'>
                <h1 className='text-3xl lg:text-[3.5em] m-0 lg:py-8 p-0 flex'>Attendance</h1>
                <h1 className='text-3xl lg:text-[3.5em] m-0 p-0 flex text-blue-900'>for your business</h1>
                <p className='w-[80vw] lg:w-[35vw] flex mt-[3em] text-justify break-all text-xs lg:text-xl'>
                    lorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlk
                </p>
            </div>
            <div className='w-[100vw] lg:w-[40vw] h-[100vh] lg:h-[70vh] flex justify-center items-center bg-white'>
                <div className="w-[80vw] lg:w-auto">
                    <form onSubmit={submitHandler}>
                        <span className='lg:gap-[15px] mb-[1.5em] flex gap-4'>
                            <div className={`flex rounded-lg border border-violet-800 w-[40vw] lg:w-[12vw] h-[3em] items-center gap-[0.5em] pl-[20px] bg-violet-200 text-violet-900 ${role === 'teacher' ? 'border-2 border-blue-500' : ''}`}>
                                <input type="radio" name="role" id="teacher" value="teacher" className='text-[1em] text-blue-900' onChange={() => setRole('teacher')} />
                                <h3>Teacher</h3>
                            </div>
                            <div className={`flex rounded-lg border border-violet-800 w-[40vw] lg:w-[12vw] h-[3em] items-center gap-[0.5em] pl-[20px] bg-violet-200 text-violet-900 ${role === 'admin' ? 'border-2 border-blue-500' : ''}`}>
                                <input type="radio" name="role" id="admin" value="admin" className='text-[1em] text-blue-900' onChange={() => setRole('admin')} />
                                <h3>Admin</h3>
                            </div>
                        </span>
                        <label className='flex flex-col my-[0.5em]'>
                            Username:<Input value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                        <label className='flex flex-col my-[0.5em]'>
                            Password:<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <span className='flex items-center m-0 gap-[1em] p-0'>
                            <Checkbox />
                            <label className='my-[0.5em]'> Remember Me </label>
                        </span>
                        <Button name="Sign in" />
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                    <span className='my-4 lg:my-[10px]'>
                        <a className='text-gray-500 cursor-pointer' href="">forget password?</a>
                    </span>
                    <span className='flex items-center m-0 p-0 gap-[1em] my-4'>
                        <h5>Don&apos;t have an account</h5><Link className='text-green-600' to="/signup">Register here</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home;
