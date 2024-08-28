import PropTypes from 'prop-types';

const Input = ({ width, placeholder, onChange, value, type }) => {
  return (
    <div>
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`flex justify-center items-center h-[2.4em] ${width} rounded-md outline-none px-[10px] border-2`}
      />
    </div>
  );
};

// Define prop types for the component
Input.propTypes = {
  width: PropTypes.string, // Tailwind width class
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
};

// // Default props
// Input.defaultProps = {
//   width: 'w-[80vw] lg:w-[30vw]',
//   placeholder: 'Enter text...',
//   onChange: () => { },
//   value: '',
//   type: 'text',
// };

export default Input;
