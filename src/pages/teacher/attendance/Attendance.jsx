import { useState } from 'react';
import Subject from "../../../components/dropdown/Subject";
import Dateset from "../../../components/dropdown/Dateset";
import Section from "../../../components/dropdown/Section";
import Button from "../../../components/button/Button";

const Attendance = () => {
    // State for dropdown selections
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    // Handle the dropdown change events
    const handleStatusChange = (event) => setSelectedStatus(event.target.value);
    const handleClassChange = (event) => setSelectedClass(event.target.value);
    const handleMonthChange = (event) => setSelectedMonth(event.target.value);

    // Handle the button click event
    const handleGenerateSheet = () => {
        console.log("Selected Status:", selectedStatus);
        console.log("Selected Class:", selectedClass);
        console.log("Selected Month:", selectedMonth);
        // Add your logic to generate the sheet based on the selected values
    };

    // Dummy data for table
    const dummyData = [
        { id: 1, name: 'John Doe', semester: 'First', totalPresentDays: 20, totalAbsentDays: 5 },
        { id: 2, name: 'Jane Smith', semester: 'Second', totalPresentDays: 18, totalAbsentDays: 7 },
        { id: 3, name: 'Alice Johnson', semester: 'First', totalPresentDays: 22, totalAbsentDays: 3 },
        { id: 4, name: 'Bob Brown', semester: 'Second', totalPresentDays: 17, totalAbsentDays: 8 },
        // Add more dummy data as needed
    ];

    return (
        <div className="flex flex-col w-[100vw] lg:w-[85vw] items-center">
            <div className="flex justify-evenly lg:w-[80vw] gap-2 my-8">
                <div className="flex gap-2 bg-white md:h-[15vh] md:w-[70vw] py-4 w-[60vw] flex-col md:flex-row items-center md:pl-8">
                    <Subject onChange={handleStatusChange} />
                    <Section onChange={handleClassChange} />
                    <Dateset onChange={handleMonthChange} />
                    <Button onClick={handleGenerateSheet} className="mt-6 px-4" width="lg:w-[10vw]" name='Generate Sheet' />
                </div>
            </div>
            <div className="w-[90vw] lg:w-[70vw] h-auto py-16 mt-16 px-4 lg:px-16 bg-white">
          <table className="w-full border-white border-collapse">
                    <thead>
                        <tr className='bg-blue-100 h-[2.5em]'>
                            <th className=''>#</th>
                            <th className=''>Student Name</th>
                            <th className=''>Semester</th>
                            <th className=''>Total Present Day</th>
                            <th className=''>Total Absent Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((student) => (
                            <tr key={student.id} className={`h-[2.5em] ${student.id % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                <td className='text-center'>{student.id}</td>
                                <td className='text-center'>{student.name}</td>
                                <td className='text-center'>{student.semester}</td>
                                <td className='text-center'>{student.totalPresentDays}</td>
                                <td className='text-center'>{student.totalAbsentDays}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div className="flex justify-between w-[90vw] lg:w-[70vw] px-2 py-4">
          <button id="prevPage" className="text-blue-500 text-2xl">&larr;</button>
          <button id="nextPage" className="text-blue-500 text-2xl">&rarr;</button>
        </div> */}
            </div>
        </div>
    )
}

export default Attendance;
