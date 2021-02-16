import { IListFilter } from '@/types/index';
import { CustomListFilter, ListItemsFilter } from './style';

const ListFilter = ({ title, items }: IListFilter) => {
  const handleFilter = field => {
    alert(field);
  };

  return (
    <CustomListFilter>
      <h1 className="title">{title} </h1>
      <ListItemsFilter className="menu">
        {items.map((item, index) => (
          <li className="item" key={index}>
            <div className="ant-checkbox-wrapper">
              <input
                type="checkbox"
                id={item}
                className="ant-checkbox-input"
                onClick={() => handleFilter(item)}
                value=""
              />{' '}
              <label className="label_" htmlFor={item}>
                {item}
              </label>
            </div>
            <span className="jobNumbers">50</span>
          </li>
        ))}
      </ListItemsFilter>
    </CustomListFilter>
  );
};

export default ListFilter;
