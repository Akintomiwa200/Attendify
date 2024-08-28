import { FaTimes } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import Input from '../../../components/input/Input'

const Absent = () => {
  return (
    <div className="w-100vw lg:w-[87vw] flex flex-col items-center overflow-x-hidden sm:min-h-[100vh]">
      <div className="h-[20vh] w-[90vw] lg:w-[70vw] flex justify-between items-center  ">
        <div>
          <h1 className='text-xs lg:text-xl text-blue-600'>Absence</h1>
          <h3>
            <span className='text-gray-500'>Analyse / </span>
            Absence
          </h3>
        </div>

      </div>
      <div className='flex flex-col gap-8 items-center justify-center sm:w-[100vw]lg:auto'>
        <div className="w-[90vw] lg:w-[70vw] h-auto py-8 bg-white flex flex-col justify-center items-center">
          <div className="flex justify-between w-[80vw] lg:w-[70vw] px-0 lg:px-8 h-[10vh] items-center">
            <h2 className='text-blue-800 font-bold'>Current Teacher</h2>
            <Input width='20vw' placeholder='search Teacher' />
          </div>
          <table className="w-[65vw] border-white border-collapse px-8 text-xs lg:text-auto">
            <thead>
              <tr className='bg-gray-200 h-[2.5em]'>
                <th className=' '>#</th>
                <th className=''>Student Name</th>
                <th className=' '>Course</th>
                <th className=' '>Semester</th>
                <th className=''>Absent reason</th>
                <th className=' '>Absene For</th>
                <th className=''>Action</th>
              </tr>
            </thead>
            <tbody id="tableBody" className="">
              <tr className=' bg-gray-100 h-[2.5em]'>
                <td className=' text-center'>Patient</td>
                <td className=' text-center'>Date</td>
                <td className='  text-center'>Status</td>
                <td className=' text-center'>Doctor</td>
                <td className=' text-center'>Actions</td>
                <td className=' text-center'>Doctor</td>
                <td className='flex gap-2 items-center text-center justify-center h-[2.5em]'>
                  <a href="" className="bg-green-500"><IoMdCheckmark /></a>
                  <a href="" className="bg-red-500 p-2"><FaTimes /></a>
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
                  <a href="" className="bg-green-500"><IoMdCheckmark /></a>
                  <a href="" className="bg-red-500 p-2"><FaTimes /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[90vw] lg:w-[70vw] h-auto lg:py-8 bg-white flex flex-col justify-center items-center">
          <div className="flex justify-between w-[80vw] lg:w-[70vw] px-0 lg:px-8 h-[10vh] items-center text-xs lg:text-xl">
            <h2 className='text-blue-800 font-bold'>Current Teacher</h2>
            <Input width='20vw' placeholder='search Teacher' />
          </div>
          <table className="lg:w-[65vw] w-[80vw] border-white border-collapse px-8 text-xs lg:text-auto">
            <thead>
              <tr className='bg-gray-200 h-[2.5em]'>
                <th className=' '>#</th>
                <th className=''>Student Name</th>
                <th className=' '>Course</th>
                <th className=' '>Semester</th>
                <th className=''>Absent reason</th>
                <th className=' '>Absene For</th>

              </tr>
            </thead>
            <tbody id="tableBody" className="text-xs">
              <tr className=' bg-gray-100 h-[2.5em]'>
                <td className=' text-center'>Patient</td>
                <td className=' text-center'>Date</td>
                <td className='  text-center'>Status</td>
                <td className=' text-center'>Doctor</td>
                <td className=' text-center'>Actions</td>
                <td className=' text-center'>Doctor</td>

              </tr>
              <tr className=' h-[2.5em]'>
                <td className='  text-center'>Patient</td>
                <td className='text-center'>Date</td>
                <td className='  text-center'>Status</td>
                <td className=' text-center'>Doctor</td>
                <td className=' text-center'>Actions</td>
                <td className=' text-center'>Doctor</td>

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Absent