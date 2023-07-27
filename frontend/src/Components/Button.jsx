const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-600 text-white cursor-pointer hover:bg-blue-500 rounded-3xl py-2 px-4 w-full text-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
