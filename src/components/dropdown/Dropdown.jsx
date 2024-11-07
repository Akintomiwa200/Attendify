import PropTypes from 'prop-types';

// Destructure props directly in the function parameter
const Dropdown = ({ menuItems, name, width }) => {
    return (
        <div className={`w-${width}`}>
            <select className='border rounded border-gray-400 text-center text-sm lg:text-xl py-2 block w-full'>
                <option disabled value="">{name}</option>
                {menuItems.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

// Define prop types for the component
Dropdown.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    name: PropTypes.string,
    width: PropTypes.string,
};

// Default props
Dropdown.defaultProps = {
    name: 'Select an option',

    // // Default props
    // Dropdown.defaultProps = {
    //     width: 'w-[80vw] lg:w-[30vw]',
    //     placeholder: 'Enter text...',
    //     onChange: () => { },
    //     value: '',
    //     type: 'text',
    // } // Default width
};

export default Dropdown;
