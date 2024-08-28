
import Dropdown from './Dropdown';

const Sex = () => {
    const menuItems = [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ];

    return (
        <div>
            <h2>Select Sex</h2>
            <Dropdown
                menuItems={menuItems}
                name="Select Sex"
                width="w-[30vw]" // Adjust width as needed
            />
        </div>
    );
};

export default Sex;
