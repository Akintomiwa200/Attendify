
import Dropdown from './Dropdown';

const Semester = () => {
  const menuItems = [
    { text: 'First Semester', value: 'first' },
    { text: 'Second Semester', value: 'second' },
  ];

  return (
    <div>
      <h2>Select Semester</h2>
      <Dropdown
        menuItems={menuItems}
        name="Select Semester"
        width="w-[30vw]" // Adjust width as needed
      />
    </div>
  );
};

export default Semester;
