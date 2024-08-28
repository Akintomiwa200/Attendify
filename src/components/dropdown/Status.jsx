
import Dropdown from './Dropdown';

const Status = () => {
  const menuItems = [
    { text: 'Absent', value: 'absent' },
    { text: 'Present', value: 'present' },
  ];

  return (
    <div>
      <h2>Select Status</h2>
      <Dropdown
        menuItems={menuItems}
        name="Select Status"
        width="w-[30vw]" // Adjust width as needed
      />
    </div>
  );
};

export default Status;
