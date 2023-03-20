const Button = (props) => {
    return (
      <button
        className={`w-[60%] h-[5%] mt-4 shadow-lg shadow-green-700 rounded-md hover:bg-lime-700  
        text-sm font-bold hover:border-2 border-blue-700 bg-lime-600 
            ${props.className || "" }`}
        onClick={props.onClick}
        type={props.type}
      >
        {props.name}
      </button>
    );
  };
  export default Button;