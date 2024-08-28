
import PropTypes from 'prop-types';
import Button from '../button/Button';

const DeleteStudentModal = ({ studentName, onClose, onDelete }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-[90vw] lg:w-[40vw]">
                <h2 className="text-xl mb-4">Delete Student</h2>
                <p>Are you sure you want to delete {studentName}?</p>
                <div className="flex justify-end gap-4 mt-8">
                    <Button onClick={onClose} className="bg-gray-500">Cancel</Button>
                    <Button onClick={onDelete} className="bg-red-600">Delete</Button>
                </div>
            </div>
        </div>
    );
};

// Define prop types for the component
DeleteStudentModal.propTypes = {
    studentName: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteStudentModal;
