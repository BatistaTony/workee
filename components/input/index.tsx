import { Input } from 'antd';

interface IInput {
  name: string;
  icon: any;
  placeholder: string;
}

const CustomInput = ({ name, icon, ...props }: IInput) => {
  return <Input prefix={icon as any} autoComplete="off" name={name} {...props} />;
};

export default CustomInput;
