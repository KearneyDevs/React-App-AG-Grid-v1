// Define the props type for InputField
interface InputFieldProps {
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
      {error && <span>{error}</span>}
    </div>
  );
};

export default InputField;
