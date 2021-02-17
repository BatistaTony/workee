import { ChangeEvent } from 'react';
import { CustomInputStyled } from './style';

interface IInput {
  name: string;
  icon: any;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ name, icon, handleChange, ...props }: IInput) => {
  return (
    <CustomInputStyled
      style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
      prefix={icon as any}
      onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
      autoComplete="off"
      name={name}
      {...props}
    />
  );
};

export default CustomInput;
