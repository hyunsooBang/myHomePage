// src/components/Profile.js

import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileText = styled.p`
  font-size: 16px;
`;

function Profile() {
  return (
    <ProfileWrapper>
      <ProfileHeader>Hyunsoo Bang</ProfileHeader>
      <ProfileText>프론트엔드 엔지니어</ProfileText>
      <ProfileText>안녕하세요! 저는 자기 소개를 작성할 수 있는 곳입니다.</ProfileText>
    </ProfileWrapper>
  );
}

export default Profile;
