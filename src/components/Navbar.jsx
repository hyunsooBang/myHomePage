import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

const NavbarWrapper = styled.nav`
  background: #2ed899;
  color: white;
  //width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-right: 0px;
  //position: fixed;
  top: 0; /* 상단에 고정되도록 top을 0으로 설정 */
  z-index: 1; 
`;

const MenuButton = styled.button`
  font-size: 20px;
  background: transparent;
  color: white;
  border: 10px;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.5, 1.5);
  }
`;

const HomeText = styled.span`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate 추가

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const goToMain = () => {
    navigate('/'); // '/' 경로로 이동
    setSidebarOpen(false);
    
  };

  return (
    <>
      <NavbarWrapper>
        <HomeText onClick={goToMain}>Soobang's Home</HomeText> {/* HomeText를 클릭하면 goToMain 함수 실행 */}
        <MenuButton onClick={toggleSidebar}>&#9776;</MenuButton>
        <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
      </NavbarWrapper>
      
    </>
  );
}

export default Navbar;
