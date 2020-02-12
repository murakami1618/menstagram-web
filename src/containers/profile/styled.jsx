import styled from 'styled-components';

export const BackButton = styled.div`
  width: 20px
  height: 20px;
  color: #666666;
  padding: 5px 0 0 5px;
`;

export const ChevronLeftIcons = {
  width: 'auto',
  height: '20px'
};

export const UserName = styled.h3`
  font-size: 20px;
`;

export const UserId = styled.h5`
  font-size: 16px;
`;

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 10px;
  background: no-repeat center;
  background-size: contain;
  border-radius: 50%;
  border: 1px solid #c6c6c6;
  position: relative;
`;

export const userIcon = {
  width: '70px',
  height: '70px',
  color: '#666666',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

export const Biography = styled.p`
  font-size: 18px;
  word-break: break-all;
`;

export const SlurpImage = styled.img`
  width: 100%;
  height: 125px;
  object-fit: contain;
`;

export const imagesIcon = {
  position: 'absolute',
  top: '15px',
  right: '15px'
};

export const Submit = styled.button`
  text-decoration: none;
  fontsize: 16px;
  font-weight: normal;
  color: #eb6101;
  background-color: white;
  padding: 0;
`;

export const blackLink = {
  color: '#3C3C3C',
  textDecoration: 'none'
};

export const Title = styled.div`
  fontsize: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const PositionParent = styled.header`
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
`;

export const OrangeText = styled.label`
  color: #eb6101;
  margin-bottom: 10px;
`;

export const Item = styled.div`
  width: 30%;
`;

export const ItemLabel = styled.label`
  white-space: nowrap;
  margin-right: 10px;
`;
