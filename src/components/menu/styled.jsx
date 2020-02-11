import styled from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 50;
  border-top: 1px solid #c6c6c6;
  display: flex;
  justify-content: space-around;
`;

export const NavIcon = {
  fontSize: '30px',
  width: 'calc( 100% / 5 )',
  lineHeight: '30px',
  textAlign: 'center'
};

export const NavIconInactive = {
  color: '#666666'
};

export const NavIconActive = {
  color: '#EB6101'
};
