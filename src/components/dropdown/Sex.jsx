
import Dropdown from './Dropdown';

const Sex = () => {
    const menuItems = [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ];

    return (
        <div>
            <Dropdown
                menuItems={menuItems}
                name="Select Sex"
                width="w-[40vw]" // Adjust width as needed
            />
        </div>
    );
};

export default Sex;
