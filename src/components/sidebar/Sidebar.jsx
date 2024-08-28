import { PiStudent } from 'react-icons/pi'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaChalkboardTeacher, FaChartLine } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {

  return (
    <div className='hidden lg:flex flex-col w-[15vw] pt[2em] h-[90vh] bg-white'>
      <div>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><FaChartLine /> Dashboard</NavLink>
      </div>
      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>ANALYZE</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><TbReportAnalytics /> Attendance</NavLink>
      </div>

      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>REQUEST</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><FaChalkboardTeacher /> Absent Application</NavLink>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><PiStudent /> Student</NavLink>
      </div>

      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>CARTLOG</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><AiOutlineLogout /> Logout</NavLink>

      </div>
    </div>
  );
};

export default Sidebar;

