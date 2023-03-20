const Button = (props) => {
    return (
      <button
        className={`w-[80%] h-[20%] p-6 ml-4 mb-6 rounded-lg shadow-lg hover:text-white text-lg
           text-cyan-900  hover:translate-x-12 hover:scale-[1.2] hover:ring-2 ring-purple-700 
           ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 font-extrabold
            ${props.className || "" }`}
        onClick={props.onClick}
        type={props.type}
      >
        {props.name}
      </button>
    );
  };
  export default Button;