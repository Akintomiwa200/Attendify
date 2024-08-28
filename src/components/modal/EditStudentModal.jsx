import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const EditStudentModal = ({ student, onClose, onSave }) => {
    const [updatedStudent, setUpdatedStudent] = useState(student);

    const handleChange = (e) => {
        setUpdatedStudent({
            ...updatedStudent,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        onSave(updatedStudent);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-[90vw] lg:w-[40vw]">
                <h2 className="text-xl mb-4">Edit Student</h2>
                <input name="name" value={updatedStudent.name} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input name="course" value={updatedStudent.course} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input name="email" value={updatedStudent.email} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input name="username" value={updatedStudent.username} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input name="password" value={updatedStudent.password} onChange={handleChange} className="border p-2 w-full mb-4" type="password" />
                <div className="flex justify-end gap-4">
                    <Button onClick={onClose} className="bg-gray-500">Cancel</Button>
                    <Button onClick={handleSave} className="bg-blue-600">Save</Button>
                </div>
            </div>
        </div>
    );
};

// Define prop types for the component
EditStudentModal.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default EditStudentModal;
