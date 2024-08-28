import Class from "../../../components/dropdown/Class"
import Month from "../../../components/dropdown/Month"
import Status from "../../../components/dropdown/Status"

const AttendanceRecord = () => {
    return (
        <div>
            <div className="flex  flex-col w-[100vw] lg:w-[85vw] items-center">
                <div className="flex justify-evenly lg:w-[80vw] gap-2 mt-8">
                    <div className="bg-white w-[80vw] h-[20vh] flex gap-4">
                        <Status />
                        <Class />
                        <Month />

                    </div>   
                </div>
                <div className="w-[90vw] lg:w-[70vw] h-auto lg:h-[45vh] pt-16">
                    <table className="w-full border-white border-collapse">
                        <thead>
                            <tr className='bg-blue-100 h-[2.5em]'>
                                <th className=' '>Patient</th>
                                <th className=''>Date</th>
                                <th className=' '>Status</th>
                                <th className=' '>Doctor</th>
                                <th className=''>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody" className="">
                            <tr className=' bg-gray-100 h-[2.5em]'>
                                <td className=' text-center'>Patient</td>
                                <td className=' text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' h-[2.5em]'>
                                <td className='  text-center'>Patient</td>
                                <td className='text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' bg-gray-100 h-[2.5em]'>
                                <td className=' text-center'>Patient</td>
                                <td className=' text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' h-[2.5em]'>
                                <td className='  text-center'>Patient</td>
                                <td className='text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' bg-gray-100 h-[2.5em]'>
                                <td className=' text-center'>Patient</td>
                                <td className=' text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' h-[2.5em]'>
                                <td className='  text-center'>Patient</td>
                                <td className='text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' bg-gray-100 h-[2.5em]'>
                                <td className=' text-center'>Patient</td>
                                <td className=' text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' h-[2.5em]'>
                                <td className='  text-center'>Patient</td>
                                <td className='text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' bg-gray-100 h-[2.5em]'>
                                <td className=' text-center'>Patient</td>
                                <td className=' text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' h-[2.5em]'>
                                <td className='  text-center'>Patient</td>
                                <td className='text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' bg-gray-100 h-[2.5em]'>
                                <td className=' text-center'>Patient</td>
                                <td className=' text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                            <tr className=' h-[2.5em]'>
                                <td className='  text-center'>Patient</td>
                                <td className='text-center'>Date</td>
                                <td className='  text-center'>Status</td>
                                <td className=' text-center'>Doctor</td>
                                <td className=' text-center'>Actions</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-between w-[90vw] lg:w-[70vw] px-2 py-4">
                        <button id="prevPage" className="text-blue-500 text-2xl">&larr;</button>
                        <button id="nextPage" className="text-blue-500 text-2xl">&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceRecord
