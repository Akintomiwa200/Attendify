import { useContext, useState } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Sex from '../../components/dropdown/Sex';


const SignUp = () => {
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
        <div className='m-0 p-0 lg:h-[90vh] flex flex-col lg:flex-row justify-center items-center bg-gray-200'>
            <div className='w-[90vw] lg:w-[40vw] h-[90vh] lg:h-[70vh] flex flex-col justify-center items-left m-0 lg:p-0 p-8 text-justify'>
                <h1 className='text-3xl lg:text-[3.5em] m-0 lg:py-8 p-0 flex'>Attendance</h1>
                <h1 className='text-3xl lg:text-[3.5em] m-0 p-0 flex text-blue-900'>for your business</h1>
                <p className='w-[80vw] lg:w-[35vw] flex mt-[3em] text-justify break-all text-xs lg:text-xl'>
                    lorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlklorembeoghtgtfltlhtlk
                </p>
            </div>
            <div className='w-[100vw] lg:w-[40vw] h-[100vh] lg:h-[80vh] flex justify-center items-center bg-white'>
                <div className="w-[80vw] lg:w-auto">
                    <form onSubmit={submitHandler}>
                        <div className='flex gap-2 lg:gap-8'>
                            <div className={`flex rounded-lg border border-violet-800 w-[28vw] lg:w-[12vw] h-[3em] items-center gap-[0.5em] pl-[20px] bg-violet-200 text-violet-900 ${role === 'teacher' ? 'border-2 border-blue-500' : ''}`}>
                                <input type="radio" name="role" id="teacher" value="teacher" className='text-[1em] text-blue-900' onChange={() => setRole('teacher')} />
                                <h3 className='text-xs '>Teacher</h3>
                            </div>
                            {/* <div className={`flex rounded-lg border border-violet-800 w-[28vw] lg:w-[9vw] h-[3em] items-center gap-[0.5em] pl-[20px] bg-violet-200 text-violet-900 ${role === 'teacher' ? 'border-2 border-blue-500' : ''}`}>
                                <input type="radio" name="role" id="admin" value="admin" className='text-[1em] text-blue-900' onChange={() => setRole('admin')} />
                                <h3 className='text-xs'>Admin</h3>
                            </div> */}
                            <div className={`flex rounded-lg border border-violet-800 w-[28vw] lg:w-[12vw] h-[3em] items-center gap-[0.5em] pl-[20px] bg-violet-200 text-violet-900 ${role === 'teacher' ? 'border-2 border-blue-500' : ''}`}>
                                <input type="radio" name="role" id="student" value="student" className='text-[1em] text-blue-900' onChange={() => setRole('student')} />
                                <h3 className='text-xs '>Student</h3>
                            </div>
                        </div>
                        <label className='flex flex-col my-[0.5em]'>
                            Full Name:<Input value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                        <label className='flex flex-col my-[0.5em]'>
                            Email:<Input type="email" value={username} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <div className='flex gap-4'>
                            <label className='flex flex-col my-[0.5em]'>
                                Sex: <Sex  className="w-[40vw]"/>
                            </label>
                            <label className='flex flex-col my-[0.5em]'>
                                Sex: <Sex />
                            </label>
                        </div>
                        <label className='flex flex-col my-[0.5em]'>
                            Username:<Input value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>

                        <label className='flex flex-col my-[0.5em]'>
                            Password:<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>


                        <Button name="Next" />
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                    <span className='flex items-center m-0 p-0 gap-[1em]'>
                        <h5>Don&apos;t have an account</h5><Link className='text-green-600' to="/">Login</Link>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
