import styled from 'styled-components';
import IcChecked from './../../assets/IcChecked.svg?react';
import IcNChecked from './../../assets/IcNChecked.svg?react';
import { useState } from 'react';

const Wishlist = ({ data, onCheck }) => {
  const [isChecked, setChecked] = useState(data.checked);

  const handleChecked = () => {
    setChecked(!isChecked);
    onCheck(data.id);
  };

  return (
    <WishlistWrapper
      onClick={handleChecked}
      isChecked={isChecked}
      color={isChecked ? '#fff' : '#F3F8FF'}
    >
      <WishlistContent>{data.content}</WishlistContent>
      {isChecked ? <StyledIcChecked /> : <StyledIcNChecked />}
    </WishlistWrapper>
  );
};

export default Wishlist;

const WishlistWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 33.5rem;
  height: 63px;
  margin: 0.5rem auto;
  padding: 1rem;

  background-color: ${(props) => props.color};
  border: ${(props) => (props.isChecked ? '1px solid #091336' : 'none')};
  color: ${(props) => (props.isChecked ? '#091336' : '#4161B7')};
  border-radius: 20px;
  cursor: pointer;
`;

const WishlistContent = styled.p`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: inherit;
`;

const StyledIcChecked = styled(IcChecked)`
  width: 3.3rem;
  height: auto;
`;

const StyledIcNChecked = styled(IcNChecked)`
  width: 3.3rem;
  height: auto;
`;
