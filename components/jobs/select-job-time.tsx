import { Select } from 'antd';

const { Option } = Select;

const JobTimeSelect = () => {
  const times = [
    { text: 'Any Date', value: 0 },
    { text: 'Today', value: Date.now() },
    { text: 'Last 3 days', value: 0 },
    { text: 'Last 7 days', value: 0 },
  ];

  return (
    <Select bordered={false} defaultValue={'Any Date'}>
      {times.map((item, index) => (
        <Option key={index} value={item.text}>
          {item.text}
        </Option>
      ))}
    </Select>
  );
};

export default JobTimeSelect;
