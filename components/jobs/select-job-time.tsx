import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setFieldTime } from 'store/actions/filter';

const { Option } = Select;

interface ITimeSelect {
  handleSelect: (data: any) => void;
}

const JobTimeSelect = () => {
  const times = [
    { text: 'Any Date', value: 20 },
    { text: 'Today', value: 0 },
    { text: 'Last 3 days', value: 3 },
    { text: 'Last 7 days', value: 7 },
  ];

  const dispatch = useDispatch();

  const handleSelect = data => {
    dispatch(setFieldTime(data));
  };

  return (
    <Select onSelect={handleSelect} bordered={false} defaultValue={'Any Date'}>
      {times.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.text}
        </Option>
      ))}
    </Select>
  );
};

export default JobTimeSelect;
