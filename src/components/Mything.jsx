import React from 'react';
import styled from 'styled-components';

const MythingWrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* 그림자 효과 강화 */
  height: 100px;
  width: 150px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  margin: 10px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold; /* 굵은 글꼴 */
  color: ${(props) => props.titleColor || 'white'}; /* titleColor props를 사용하여 글자색 설정 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* 텍스트 그림자 효과 */
`;

const Description = styled.p`
  font-size: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  //font-style: italic; /* 이탤릭체 스타일 추가 */
  color: black;
`;

const Mything = ({ title, description, backgroundColor, titleColor }) => {
  return (
    <MythingWrapper backgroundColor={backgroundColor}>
      <Title titleColor={titleColor}>{title}</Title>
      <Description titleColor={titleColor}>{description}</Description>
    </MythingWrapper>
  );
};

export default Mything;
