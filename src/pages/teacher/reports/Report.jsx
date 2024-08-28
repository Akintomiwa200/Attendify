import { useState } from 'react';

import Subject from "../../../components/dropdown/Subject";
import Section from "../../../components/dropdown/Section";
import Button from "../../../components/button/Button";
import Month from '../../../components/dropdown/Month';
import Year from '../../../components/dropdown/Year';
const Report = () => {

    // State for dropdown selections
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    // Handle the dropdown change events

    const handleStatusChange = (event) => setSelectedStatus(event.target.value);
    const handleClassChange = (event) => setSelectedClass(event.target.value);
    const handleMonthChange = (event) => setSelectedMonth(event.target.value);
    const handleYearChange = (event) => setSelectedYear(event.target.value);

    // Handle the button click event
    const handleGenerateSheet = () => {

        console.log("Selected Status:", selectedStatus);
        console.log("Selected Class:", selectedClass);
        console.log("Selected Month:", selectedMonth);
        console.log("Selected Month:", selectedYear);
        // Add your logic to generate the sheet based on the selected values
    };


    return (
        <div className="flex flex-col w-[100vw] lg:w-[85vw] items-center">
            <div className="h-[15vh] w-[70vw] flex justify-between items-center  ">
                <div>
                    <h1 className='text-xl text-blue-600'>Report</h1>
                    <h3>
                        <span className='text-gray-500'>Analyse/ </span>
                        Report
                    </h3>
                </div>

            </div>
            <div className="flex justify-evenly lg:w-[80vw] gap-2 my-4">
                <div className="flex gap-2 bg-white h-[15vh] w-[70vw] items-center pl-8">

                    <Subject onChange={handleStatusChange} />
                    <Section onChange={handleClassChange} />
                    <Month onChange={handleMonthChange} />
                    <Year onChange={handleYearChange} />
                    <Button onClick={handleGenerateSheet} width='w-[10vw]' className="mt-6" name='Generate Sheet' />
                </div>
            </div>
            {/* <div className="w-[90vw] lg:w-[70vw] h-auto py-16 mt-16 px-16 bg-white">
                <table className="w-full border-white border-collapse">
                    <thead>
                        <tr className='bg-blue-100 h-[2.5em]'>
                            <th className=''>#</th>
                            <th className=''>Course</th>
                            <th className=''>Subject</th>
                            <th className=''>Section</th>
                            <th className=''>Month</th>
                            <th className=''>Year</th>
                        </tr>
                    </thead>
                   
                </table>
               
            </div> */}
        </div>
    )
}

export default Report