import React , { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import AboutMe from 'pages/AboutMe';
import ForFun from 'pages/ForFun';
import GuestBook from 'pages/GuestBook';
import MyCareer from 'pages/MyCareer';
import Main from 'pages/Main';
import Onboarding from 'components/Onboarding';
import styled from 'styled-components';
import { getDB } from './firebase';


const AppWrapper = styled.div`
  font-family: 'Noto Sans KR', cursive; 
  overflow: hidden; /* 페이지 전환 시 스크롤 숨김 */
  margin: 0px;
`;

function App() {

  const [showOnboarding, setShowOnboarding] = useState(true);

    const handleExplore = () => {
      setShowOnboarding(false);
    };
    useEffect(() => {
        // 로컬 스토리지에서 방문 상태를 확인
        const hasVisited = localStorage.getItem('hasVisited');
    
        if (!hasVisited) {
          // 방문한 적이 없으면 온보딩 화면을 표시하고 방문 상태를 저장
          setShowOnboarding(true);
          localStorage.setItem('hasVisited', 'true');
        }
      }, []);
      

  return (
    <AppWrapper>
      {showOnboarding && (
        <Onboarding visible={showOnboarding} handleExplore={handleExplore} />
      )}
      {!showOnboarding && (

    <BrowserRouter>
      <div>
      <Navbar />
    <Routes>
      <Route index element={<Main />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="my-career" element={<MyCareer />} />
      <Route path="for-fun" element={<ForFun />} />
      <Route path="guest-book" element={<GuestBook />} />
    </Routes>
      </div>
    </BrowserRouter>)}
    </AppWrapper> 
  );

}
export default App;
