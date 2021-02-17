import { FilterMobileStyled, ButtomToggleFilter } from './style';
import { ControlOutlined } from '@ant-design/icons';
import Filter from '.';
import useToggle from '@/hooks/useToggle';

const FilterMobile = () => {
  const { isActive, toggle } = useToggle();

  return (
    <>
      <ButtomToggleFilter onClick={toggle}>
        <ControlOutlined />
      </ButtomToggleFilter>
      {isActive && (
        <FilterMobileStyled initial={{ x: -100 }} animate={{ x: 0 }}>
          <div className="divWrapperFilter">
            <Filter isMobile={true} />
          </div>
        </FilterMobileStyled>
      )}
    </>
  );
};

export default FilterMobile;
