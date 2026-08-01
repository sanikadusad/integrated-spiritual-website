interface InputProps {
    label: string;
    id: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input = ({ label, id, type = 'text', value, onChange }: InputProps) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default Input;