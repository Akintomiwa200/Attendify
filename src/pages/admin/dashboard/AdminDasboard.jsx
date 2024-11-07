import Card from '../../../components/card/Card'
import Linechart from '../../../components/chart/Linechart'
import Radarchart from '../../../components/chart/Radarchart'





const AdminDasboard = () => {



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
                    <div className='bg-white h-[32vh] w-[90vw] lg:w-[20vw] relative px-4 py-4 lg:pl-6 lg:pt-4'>
                        <h3 className='pl-4 pt-4 text-gray-600 '>
                            <span className='text-green-500'>Recent Activities | </span>
                            Today
                        </h3>

                        <ul className='mt-4 space-y-4 w-60'>
                            <li className='flex text-gray-700 relative items-center before:content-[""] before:absolute before:h-full before:w-0.5 before:bg-gray-900 before:left-2.5 before:top-0'>
                                <div className='w-2.5 h-2.5 bg-blue-600 top-8 left-1.5 rounded-full relative'></div>
                                <div className='ml-4 flex flex-col'></div>
                                <span className='mr-4'>32 min</span>
                                <span className='ml-4'>New teacher created</span>
                            </li>
                            <li className='flex text-gray-700 relative items-center before:content-[""] before:h-full before:w-0.5 before:bg-gray-900 before:left-2.5 before:top-0 before:absolute'>
                                <div className='w-2.5 h-2.5 bg-blue-600 rounded-full relative top-8 left-1.5 '></div>
                                <div className='ml-4 flex flex-col'></div>
                                <span className='mr-4'>56 min</span>
                                <span className='ml-4'>java Attendance taken</span>
                            </li>
                            <li className='flex text-gray-700 relative items-center before:content-[""] before:h-full before:w-0.5 before:bg-gray-900 before:left-2.5 before:top-0 before:absolute'>
                                <div className='w-2.5 h-2.5 bg-blue-600 rounded-full relative top-5 left-1.5 '></div>
                                <div className='ml-4 flex flex-col'></div>
                                <span className='mr-4'>2hours</span>
                                <span className='ml-4'>Absence aplication</span>
                            </li>

                        </ul>
                    </div>


                    <div className='bg-white h-[40vh] lg:w-[20vw] pl-4 pt-4'>
                        <h3 className=' text-gray-600'>
                            <span className='text-green-500'>Attendance Report/ </span>
                            ThisMonth
                        </h3>
                        <div className="w-full h-auto">
                            <Radarchart />
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default AdminDasboard