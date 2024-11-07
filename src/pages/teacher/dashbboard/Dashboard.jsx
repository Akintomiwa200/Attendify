import Card from '../../../components/card/Card'
import Radarchart from '../../../components/chart/Radarchart'
import Linechart from '../../../components/chart/Linechart'
const Dashboard = () => {
    return (
        <div className="w-100vw lg:w-[87vw] h-auto flex flex-col lg:pl-16 mb-2 mx-auto">
            <div className="h-[15vh] w-[70vw] flex justify-between items-center ">
                <div>
                    <h1 className='text-xl text-blue-600'>Dashboard</h1>
                    <h3>
                        <span className='text-gray-500'>Home/ </span>
                        Dashboard
                    </h3>
                </div>
            </div>
            <div className="flex gap-4 lg:flex-row flex-col">
                <div className='flex gap-4 flex-col'>
                    <div className="flex gap-2 flex-col lg:flex-row" id="card">
                        <Card
                            title='Present'
                            mainValue='145'
                            subValue='Today'
                            SubText='12'
                        />
                        <Card title='Absent'
                            mainValue='145'
                            subValue='Today'
                            SubText='12'
                        />
                        <Card
                            title='Attendance'
                            mainValue='145'
                            subValue='This Month'
                            SubText='12'
                        />

                    </div>
                    <div className='bg-white h-[52vh] w-[90vw] lg:w-[58vw]  lg:pl-8 pt-8 relative' id="graph">
                     <h3 className=' text-gray-600 mb-8'>
                            <span className='text-green-500'>Reports / </span>
                            Today
                        </h3>
                        <Linechart />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    {/* <div className='bg-white h-[32vh] w-[20vw]'>
                        <h3 className='pl-4 pt-4 text-gray-600'>
                            <span className='text-green-500'>Recent Activities | </span>
                            Today
                        </h3>
                        <ul className='mt-4 space-y-6 w-64 '>
                            <li className='flex justify-between text-gray-700 '>
                                <span>32 min</span>
                                <span>New teacher created</span>
                            </li>
                            <li className='flex justify-between text-gray-700 '>
                                <span>56 min</span>
                                <span>java Attendance taken</span>
                            </li>

                            <li className='flex justify-between text-gray-700 '>
                                <span>2hours</span>
                                <span>Absence aplication</span>
                            </li>

                        </ul>

                    </div> */}
                    <div className='bg-white h-[40vh] lg:w-[20vw] pl-4 pt-4'>
                                     <h3 className=' text-gray-600'>
                            <span className='text-blue-700'>Attendance Report/ </span>
                            ThisMonth
                        </h3>
                        <div className="w-full h-auto">
                            <Radarchart />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard