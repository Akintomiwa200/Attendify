import { PiStudent } from 'react-icons/pi'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaChartLine } from 'react-icons/fa'
import { MdMenuBook } from 'react-icons/md'
import { NavLink } from 'react-router-dom'


const Sidebar3 = () => {

  return (
    <div className='hidden lg:flex flex-col w-[15vw] pt[2em] h-[90vh] bg-white'>

      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>TRACK</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]' to='/teacher/attendance'><TbReportAnalytics /> Attendance Sheet</NavLink>
      </div>

      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>ANALYZE</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]' to='/teacher'><FaChartLine /> Dashboard</NavLink>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]' to='/teacher/report'><MdMenuBook /> Report</NavLink>

      </div>

      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>MANAGE</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]' to='/teacher/student'><PiStudent /> Student</NavLink>
      </div>
      <div>
        <h4 className='m-0 text-[0.75em] font-light text-blue-800 p-[1em]'>CARTLOG GJJJHK</h4>
        <NavLink className='h-[3em] flex items-center m-0 text-blue-900 text-[1.1em] font-semibold gap-[10px] pl-[1em]'><AiOutlineLogout /> Logout</NavLink>

      </div>
    </div>
  );
};

export default Sidebar3;
