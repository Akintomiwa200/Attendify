import PropTypes from 'prop-types';


const Card = ({ title, mainValue, subValue, SubText }) => {
    return (
        <div className="flex  lg:w-[19vw] h-[20vh] pl-8 justify-center bg-white flex-col">
            <h2 className=" mb-4"><span className="text-blue-700 text-xl font-medium">{title}</span> | {subValue}</h2>
            <div className="flex gap-4">
                <span className="w-[4em] h-[4em] rounded-full bg-gray-300"></span>
                <div>
                    <h2 className="text-2xl text-blue-700 font-semibold">{mainValue}</h2>
                    <h6 className="text-gray-600"> <span className="text-blue-800 font-bold">{SubText}% </span>increase</h6>
                </div>
            </div>
        </div>
    )
}
// Define prop types for the component
Card.propTypes = {
    title: PropTypes.string.isRequired, // Tailwind width class
    mainValue: PropTypes.string.isRequired,
    subValue: PropTypes.string.isRequired,
    SubText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

// Default props
Card.defaultProps = {
    width: 'w-[80vw] md:w[80vw] lg:w-[30vw]',
    placeholder: 'Enter text...',
    onChange: () => { },
    value: '',
    type: 'text',
};


export default Card
