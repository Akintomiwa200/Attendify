

import Dropdown from './Dropdown'


const Section = () => {

    const menuItems = [
        { text: 'Absent', index: 1 },
        { text: 'Present', index: 2 },

    ];

    return (
        <div>
            <div >
                <h2>Session</h2>
                <Dropdown menuItems={menuItems} name="Select Session" />
            </div>
        </div>
    );
};

export default Section;
