
import Dropdown from './Dropdown';

const Month = () => {
    const menuItems = [
        { text: 'January', index: 1 },
        { text: 'February', index: 2 },
        { text: 'March', index: 3 },
        { text: 'April', index: 4 },
        { text: 'May', index: 5 },
        { text: 'June', index: 6 },
        { text: 'July', index: 7 },
        { text: 'August', index: 8 },
        { text: 'September', index: 9 },
        { text: 'October', index: 10 },
        { text: 'November', index: 11 },
        { text: 'December', index: 12 },
    ];

    return (
        <div>
            <h2>Select a Month</h2>
            <Dropdown
                menuItems={menuItems}
                name="Select Month"
                width="w-[30vw]" // Adjust the width as needed
            />
        </div>
    );
};

export default Month;
