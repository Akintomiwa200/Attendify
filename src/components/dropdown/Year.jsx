
import Dropdown from './Dropdown';

const Year = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

    // Generate menuItems for the Dropdown
    const menuItems = years.map((year) => ({
        text: year.toString(),
        value: year.toString(),
    }));

    return (
        <div>
            <h2>Year</h2>
            <Dropdown
                menuItems={menuItems}
                name="Select Year"
                width="w-[15vw]" // You can adjust the width as needed
            />
        </div>
    );
};

export default Year;
