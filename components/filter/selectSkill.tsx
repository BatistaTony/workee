import { Select } from 'antd';
import { SelectStyled } from './style';

const { Option } = Select;

interface ISelect {
  handleSelect: (selected: string) => void;
}

const SelectSkill = ({ handleSelect }: ISelect) => {
  const options = [{ value: 'React', disable: false }];

  return (
    <SelectStyled
      mode="tags"
      placeholder="Skills (max 3)"
      maxTagCount={3}
      onChange={handleSelect}
      style={{ width: '100%' }}
    >
      {options.map((item, index) => (
        <Option key={index} value={item.value} disabled={item.disable}>
          {item.value}
        </Option>
      ))}
    </SelectStyled>
  );
};

export default SelectSkill;
