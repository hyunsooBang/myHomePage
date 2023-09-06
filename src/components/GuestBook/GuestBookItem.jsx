import React, { useState } from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px; // 각 그리드 사이의 간격 설정
`;

const GridItem = styled.div`
  font-family: 'Noto Sans KR', cursive;
  width: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  font-size: 20px;
  background-color: #4293f5;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out; /* max-height 변화에 트랜지션 적용 */
  max-height: ${(props) => (props.isOpen ? '1000px' : '26px')}; /* isOpen에 따라 max-height 조절 */

  &:hover {
    background-color: #3271e8; /* hover 시 배경색 변경 */
  }
  `;

const Title = styled.p`
  font-size: 18px;
  color: white;
  margin: 0;
`;

const Contents = styled.p`
  margin: 15px 5px 15px 5px;
  font-size: 15px;
  color: #f8f9fa;
`;

const Author = styled.p`
  margin: 0px;
  font-size: 12px;
  text-align: right;
  color: black;
`;

function GuestBookItem({ guestArray }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleEntry = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // 닫기
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <GridContainer>
      {guestArray.map((guest, index) => (
        <GridItem
          key={index}
          onClick={() => toggleEntry(index)}
          isOpen={openIndex === index} // isOpen 상태를 props로 전달
        >
          {/* 필드 이름에 맞게 guest 객체의 속성을 표시 */}
          <Title> {guest.title}</Title>
          {openIndex === index && (
            <>
              <Contents> {guest.contents}</Contents>
              <Author>From. {guest.author}</Author>
            </>
          )}
        </GridItem>
      ))}
    </GridContainer>
  );
}

export default GuestBookItem;
