import { CustomSearchField, ButtonSearch } from './style';
import CustomInput from '@/components/input';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import SelectSkill from '../filter/selectSkill';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSimpeFilter } from './../../store/actions/filter';
import FilterMobile from '../filter/filter-mobile';

interface IState {
  company_name: string;
  location: string;
  skills: string[] | any;
}

const defaultState = {
  company_name: '',
  location: '',
  skills: [],
};

const SearchField = () => {
  const [state, setState] = useState<IState>(defaultState);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });

    if (event.target.value === '') {
      dispatch(setSimpeFilter(defaultState));
    }
  };

  const handleSelect = selected => {
    setState({ ...state, skills: selected });
  };

  const findJob = () => {
    dispatch(setSimpeFilter(state));
  };

  return (
    <>
      <FilterMobile />
      <form onSubmit={handleSubmit}>
        <CustomSearchField id="start">
          <div className="div_wrapper">
            <CustomInput
              name="company_name"
              handleChange={handleChange}
              placeholder="job title or company name"
              icon={<SearchOutlined />}
            />
          </div>
          <div className="div_wrapper">
            <CustomInput
              name="location"
              handleChange={handleChange}
              placeholder="location"
              icon={<EnvironmentOutlined />}
            />
          </div>
          <div className="div_wrapper">
            <SelectSkill handleSelect={handleSelect} />
          </div>
          <ButtonSearch onClick={findJob}>Find Job</ButtonSearch>
        </CustomSearchField>
      </form>
    </>
  );
};

export default SearchField;
