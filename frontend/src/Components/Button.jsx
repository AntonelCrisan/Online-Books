const Button = ({ text, onClick, width = "w-full" }) => {
  return (
    <button
      className={`bg-blue-600 text-white cursor-pointer hover:bg-blue-500 rounded-3xl py-2 px-4 text-center ${width}`}
      onClick={onClick}
      width = {width}
    >
      {text}
    </button>
  );
};
export default Button;
