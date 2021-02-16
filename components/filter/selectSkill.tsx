import { Select, Divider, Layout } from 'antd';

const { Option } = Select;
const { Content } = Layout;

const SelectSkill = () => {
  const options = [{ value: 'React', disable: false }];

  const handleChange = () => {};

  return (
    <Layout>
      <Content>
        <Select mode="tags" onChange={handleChange}>
          {options.map((item, index) => (
            <Option key={index} value={item.value} disabled={item.disable}>
              {item.value}
            </Option>
          ))}
        </Select>
      </Content>
    </Layout>
  );
};

export default SelectSkill;
