
import Dropdown from './Dropdown';

const Course = () => {
    const menuItems = [
        { text: 'Mathematics', value: 'math' },
        { text: 'Science', value: 'science' },
        { text: 'English', value: 'english' },
        { text: 'History', value: 'history' },
        { text: 'Geography', value: 'geography' },
        { text: 'Art', value: 'art' },
        { text: 'Physical Education', value: 'pe' },
        { text: 'Computer Science', value: 'cs' },
    ];

    return (
        <div>
            <h2>Select Course</h2>
            <Dropdown
                menuItems={menuItems}
                name="Select Course"
                width="w-[30vw]" // Adjust width as needed
            />
        </div>
    );
};

export default Course;
