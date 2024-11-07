import { FaEdit } from "react-icons/fa"
import { MdDelete } from 'react-icons/md'
import Input from '../../../components/input/Input'
import Button from "../../../components/button/Button"
import { NavLink } from "react-router-dom"
const AdminTeacher = () => {
    return (
        <div className="w-full md:h-[90vh] min-h-[90vh]  lg:w-[87vw] flex flex-col items-center">
            <div className="h-[20vh] w-[90vw] md:w-[70vw] flex justify-between items-center  ">
                <div>
                    <h1 className='text-xl text-blue-600'>Teacher</h1>
                    <h3>
                        <span className='text-gray-500'>Manage / </span>
                        Teacher
                    </h3>
                </div>
                <NavLink to='/admin/addteacher'><Button className=" py-[1em] px-[3em] bg-blue-900 text-white cursor-pointer hover:bg-blue-600 text-sm lg:text-xl hover:text-black hover:scale-1000 border-none" name='Add Teacher' width='lg:w-[10vw]' /></NavLink>
            </div>
            <div className="w-[90vw] lg:w-[70vw] h-auto py-8 bg-white flex flex-col justify-center items-center">
                <div className="flex justify-between w-[90vw] lg:w-[70vw] px-8 h-[10vh] items-center">
                    <h2 className='text-blue-800 font-bold'>Current Teacher</h2>
                    <Input width='20vw' placeholder='search Teacher' />
                </div>
                <table className="w-[65vw] border-white border-collapse px-8 text-sm md:text-xl ">
                    <thead>
                        <tr className='bg-gray-200 h-[2.5em]'>
                            <th className=' '>#</th>
                            <th className=''>Student Name</th>
                            <th className=' '>Course</th>
                            <th className=' '>Email</th>
                            <th className=''>Username</th>
                            <th className=' '>password</th>
                            <th className=''>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody" className=" text-xs md:text-xl">
                        <tr className=' bg-gray-100 h-[2.5em]'>
                            <td className=' text-center'>Patient</td>
                            <td className=' text-center'>Date</td>
                            <td className='  text-center'>Status</td>
                            <td className=' text-center'>Doctor</td>
                            <td className=' text-center'>Actions</td>
                            <td className=' text-center'>Doctor</td>
                            <td className='flex gap-2 items-center text-center justify-center h-[2.5em]'>
                                <a href=""><FaEdit /></a>
                                <a href="" className="text-red-500"><MdDelete /></a>
                            </td>
                        </tr>
                        <tr className=' h-[2.5em]'>
                            <td className='  text-center'>Patient</td>
                            <td className='text-center'>Date</td>
                            <td className='  text-center'>Status</td>
                            <td className=' text-center'>Doctor</td>
                            <td className=' text-center'>Actions</td>
                            <td className=' text-center'>Doctor</td>
                            <td className='flex gap-2 items-center text-center justify-center h-[2.5em]'>
                                <a href=""><FaEdit /></a>
                                <a href="" className="text-red-500"><MdDelete /></a>
                            </td>
                        </tr>
                        <tr className=' bg-gray-100 h-[2.5em]'>
                            <td className=' text-center'>Patient</td>
                            <td className=' text-center'>Date</td>
                            <td className='  text-center'>Status</td>
                            <td className=' text-center'>Doctor</td>
                            <td className=' text-center'>Actions</td>
                            <td className=' text-center'>Doctor</td>
                            <td className='flex gap-2 items-center text-center justify-center h-[2.5em]'>
                                <a href=""><FaEdit /></a>
                                <a href="" className="text-red-500"><MdDelete /></a>
                            </td>

                        </tr>
                        <tr className=' h-[2.5em]'>
                            <td className='  text-center'>Patient</td>
                            <td className='text-center'>Date</td>
                            <td className='  text-center'>Status</td>
                            <td className=' text-center'>Doctor</td>
                            <td className=' text-center'>Actions</td>
                            <td className=' text-center'>Doctor</td>
                            <td className='flex gap-2 items-center text-center justify-center h-[2.5em]'>
                                <a href=""><FaEdit /></a>
                                <a href="" className="text-red-500"><MdDelete /></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminTeacher
