import { CustomSearchField, ButtonSearch } from './style';
import CustomInput from '@/components/input';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Mentions } from 'antd';
import SelectSkill from '../filter/selectSkill';

const { Option } = Mentions;

const SearchField = () => {
  return (
    <CustomSearchField>
      <div className="div_wrapper">
        <CustomInput
          name="name"
          placeholder="job title or company name"
          icon={<SearchOutlined />}
        />
      </div>
      <div className="div_wrapper">
        <CustomInput name="name" placeholder="location" icon={<EnvironmentOutlined />} />
      </div>
      <div className="div_wrapper">
        <SelectSkill />
      </div>
      <ButtonSearch>Find Job</ButtonSearch>
    </CustomSearchField>
  );
};

export default SearchField;
