const Tbutton = (props) => {
    return (
      <button
        className={` border border-green-500 text-green-500 p-2 ml-20 font-semibold mt-4 hover:text-white rounded-sm
            ${props.className || "" }`}
        onClick={props.onClick}
        type={props.type}
      >
        {props.name}
      </button>
    );
  };
  export default Tbutton;