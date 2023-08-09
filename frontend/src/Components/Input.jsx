const Input = ({
  type,
  name,
  placeholder,
  required = true,
  autoComplete = "off",
  onChange,
}) => {
  return (
    <input
      className="border-gray border-2 outline-none focus:border-blue-600 rounded-3xl px-4 py-2 w-full"
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  );
};
export default Input;
