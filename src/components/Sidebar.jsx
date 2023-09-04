import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -300px; /* 시작 시 사이드바 숨김 */
  width: 300px;
  height: 100%;
  background: white;
  color: white;
  transition: right 0.3s ease; /* 부드러운 이동 효과 */
  z-index: 1; /* 화면 위에 나타나도록 설정 */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #ff8181;
  cursor: pointer;
  font-size: 15px;
  transition: font-size 0.3s ease; /* 커서를 올렸을 때 글자 크기 변화 */
  outline: none; /* 클릭 포커스 효과 제거 */

  &:hover {
    font-size: 19px; /* 버튼 크기 확대 */
  }
`;

const SidebarItem = styled.div`
  padding: 20px;
  margin-top: 25px;
  cursor: pointer;
  color: #ff8181;
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 18px;
  }

`;

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
    
  const handleItemClick = (section) => {
    switch (section) {
        case 'About Me':
            navigate('/about-me');
            break;
        case 'My Career':
            navigate('/my-career');
            break;
        case 'For Fun':
            navigate('/for-fun');
            break;
        case 'Guest Book':
            navigate('/guest-book');
            break;
        default:
            navigate('/');
            break;
      }
    };
  

  return (
    <SidebarWrapper style={{ right: isOpen ? '0' : '-300px' }}>
      <CloseButton onClick={onClose}>close</CloseButton>
      <SidebarItem onClick={() => handleItemClick('About Me')}>About Me</SidebarItem>
      <SidebarItem onClick={() => handleItemClick('My Career')}>My Career</SidebarItem>
      <SidebarItem onClick={() => handleItemClick('For Fun')}>For Fun</SidebarItem>
      <SidebarItem onClick={() => handleItemClick('Guest Book')}>Guest Book</SidebarItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
