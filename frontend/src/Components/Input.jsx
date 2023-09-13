const Input = ({
  type,
  name,
  placeholder,
  required = true,
  autoComplete = "off",
  onChange,
  border
}) => {
  return (
    <input
      className={`border-gray border-2 outline-none ${border} rounded-3xl px-4 py-2 w-full truncate`}
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
