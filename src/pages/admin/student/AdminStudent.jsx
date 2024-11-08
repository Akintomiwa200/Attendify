

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import EditStudentModal from "../../../components/modal/EditStudentModal";
import DeleteStudentModal from "../../../components/modal/DeleteStudentModal";

const AdminStudent = () => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "John Doe",
            course: "Computer Science",
            email: "john@example.com",
            username: "johndoe",
            password: "********",
        },
        {
            id: 2,
            name: "Jane Smith",
            course: "Engineering",
            email: "jane@example.com",
            username: "janesmith",
            password: "********",
        },
        {
            id: 3,
            name: "John Doe",
            course: "Computer Science",
            email: "john@example.com",
            username: "johndoe",
            password: "********",
        },
        {
            id: 4,
            name: "Jane Smith",
            course: "Engineering",
            email: "jane@example.com",
            username: "janesmith",
            password: "********",
        },
        // Add more students here
    ]);

    const [editingStudent, setEditingStudent] = useState(null);
    const [deletingStudent, setDeletingStudent] = useState(null);
    const navigate = useNavigate();


    const handleClick = () => {
        console.log("Add Student button clicked!");
        // Logic to add a new student
        navigate('/admin/addstudent');
    };

    const handleEdit = (student) => {
        setEditingStudent(student);
    };

    const handleDelete = (student) => {
        setDeletingStudent(student);
    };

    const saveStudent = (updatedStudent) => {
        setStudents(students.map((student) =>
            student.id === updatedStudent.id ? updatedStudent : student
        ));
    };

    const deleteStudent = () => {
        setStudents(students.filter((student) => student.id !== deletingStudent.id));
        setDeletingStudent(null);
    };

    return (
        <div className="w-full min-h-[90vh] md:h-[90vh] lg:w-[87vw] flex flex-col items-center">
            <div className="h-[20vh] w-[90vw] md:w-[70vw] flex justify-between items-center">
                <div>
                    <h1 className="text-xl text-blue-600">Student</h1>
                    <h3>
                        <span className="text-gray-500">Manage / </span>
                        student
                    </h3>
                </div>

                <Button onClick={handleClick} className=" py-[1em] px-[3em] bg-blue-900 text-white cursor-pointer hover:bg-blue-600 text-sm lg:text-xl hover:text-black hover:scale-1000 border-none" width="lg:w-[12vw] ">
                    Add Student
                </Button>

            </div>
            <div className="w-[90vw] lg:w-[70vw] h-auto py-8 bg-white flex flex-col justify-center items-center">
                <div className="flex justify-between md:w-[70vw] px-8 h-[10vh] items-center">
                    <h2 className="text-blue-800 font-bold">Current Student</h2>
                    <Input placeholder="Search..." width='20vw' />
                </div>
                <table className=" w-[80vw] md:w-[65vw] border-white border-collapse px-8">
                    <thead>
                        <tr className="bg-gray-200 h-[2.5em] text-sm md:xl">
                            <th className="text-center">#</th>
                            <th className="text-center">Student Name</th>
                            <th className="text-center">Course</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Username</th>
                            <th className="text-center">Password</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        {students.map((student, index) => (
                            <tr key={student.id} className={index % 2 === 0 ? "bg-gray-100 h-[2.5em]" : "h-[2.5em]"}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{student.name}</td>
                                <td className="text-center">{student.course}</td>
                                <td className="text-center">{student.email}</td>
                                <td className="text-center">{student.username}</td>
                                <td className="text-center">{student.password}</td>
                                <td className="flex gap-2 items-center justify-center">
                                    <a href="#" onClick={() => handleEdit(student)}>
                                        <FaEdit />
                                    </a>
                                    <a href="#" className="text-red-500" onClick={() => handleDelete(student)}>
                                        <MdDelete />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modals */}
            {editingStudent && (
                <EditStudentModal
                    student={editingStudent}
                    onClose={() => setEditingStudent(null)}
                    onSave={saveStudent}
                />
            )}

            {deletingStudent && (
                <DeleteStudentModal
                    studentName={deletingStudent.name}
                    onClose={() => setDeletingStudent(null)}
                    onDelete={deleteStudent}
                />
            )}
        </div>
    );
};

export default AdminStudent;
