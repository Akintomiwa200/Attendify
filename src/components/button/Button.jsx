

import PropTypes from 'prop-types';

const Button = ({ width, children, onClick, name, className }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${width} py-[1em] rounded-xl border-none bg-blue-900 text-white cursor-pointer hover:bg-blue-600 hover:text-black hover:scale-1000 ${className}`}
    >
      {children || name}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string, // Tailwind width class
  onClick: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
};

// Button.defaultProps = {
//   children: null,
//   width: 'w-[80vw] lg:w-[30vw]',
//   onClick: () => { },
//   name: '',
//   className: '',
// };

export default Button;
