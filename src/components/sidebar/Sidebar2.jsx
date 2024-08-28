import { PiStudent } from 'react-icons/pi'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlineLogout } from 'react-icons/ai'
import { CgUnavailable } from "react-icons/cg"
import { FaChalkboardTeacher, FaChartLine, FaMarker } from 'react-icons/fa'
import { MdMenuBook } from 'react-icons/md'
import { NavLink } from 'react-router-dom'


const Sidebar2 = () => {

  return (
    <div className='hidden lg:flex flex-col w-[15vw] pt[2em] h-[90vh] bg-white sticky left-0'>
      <div className='mt-2'>
        <NavLink to="/admin/dashboard" className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><FaChartLine /> Dashboard</NavLink>
      </div>
      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>ANALYZE</h4>
        <NavLink to='/admin' className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]' ><FaMarker /> Attendance</NavLink>
        <NavLink to='/admin/absent' className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><CgUnavailable />Absence </NavLink>
        <NavLink to='/admin/report' className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><TbReportAnalytics /> Report</NavLink>
      </div>

      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>MANAGE</h4>
        <NavLink to='/admin/teacher' className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><FaChalkboardTeacher /> Teacher</NavLink>
        <NavLink to='/admin/student' className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><PiStudent /> Student</NavLink>
        <NavLink to='/admin/subject' className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><MdMenuBook /> Subject</NavLink>
      </div>

      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>CARTLOG</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><AiOutlineLogout /> Logout</NavLink>

      </div>
    </div>
  );
};

export default Sidebar2;
