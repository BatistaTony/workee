import { ChangeEvent } from 'react';
import { CustomInputStyled } from './style';

interface IInput {
  name: string;
  icon: any;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const CustomInput = ({ name, icon, handleChange, value, ...props }: IInput) => {
  return (
    <CustomInputStyled
      style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
      prefix={icon as any}
      onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
      autoComplete="off"
      name={name}
      value={value}
      {...props}
    />
  );
};

export default CustomInput;
