import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore/lite';
import { userdb } from '../firebase';
import GuestBookItem from 'components/GuestBook/GuestBookItem';

const GuestbookContainer = styled.div`
  font-family: 'Noto Sans KR', cursive;
  text-align: center;
  padding: 20px;
`;

const blingbling = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const AddButton = styled.button`
  
  background-color: transparent;
  font-family: 'Noto Sans KR', cursive;
  color: #2ec999;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
  animation: ${blingbling} 1.5s infinite;
  
`;

const Popup = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  width: 250px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
  text-align: left;
  font-family: 'Noto Sans KR', cursive;
  align-items: center;
  justify-content: center;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
    color: #464646;
    
  }

  input
  {
    font-family: 'Noto Sans KR', cursive;
    width: 91%;
    height: 20px;
    padding: 10px;
    font-family: 
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  textarea {
    font-family: 'Noto Sans KR', cursive;
    width: 91%;
    height: 50px;
    padding: 10px;
    font-family: 
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  
  border: none;
  color: #2ed899;
  cursor: pointer;
  font-size: 25px;
  transition: font-size 0.3s ease; /* 커서를 올렸을 때 글자 크기 변화 */
  outline: none; /* 클릭 포커스 효과 제거 */

  &:hover {
    font-size: 28px; /* 버튼 크기 확대 */
  }
`;



const ButtonGroup = styled.div`
  text-align: center;

  button {
    background-color: #2ed899;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 5px;
    font-family: 'Noto Sans KR', cursive;

    &:hover {
      background-color: #44c899;
    }
  }
`;

function GuestBook() {
  
  const [newEntry, setNewEntry] = useState({ title: '', contents: '', author: '' });
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [guestlist, setGuestList] = useState([]);
  const guestArray = Object.values(guestlist);

  async function fetchGuestList() {
    try {
      const guestCol = collection(userdb, 'soobang'); // 'soobangGuest'에 해당하는 컬렉션 이름으로 수정
      const guestSnapshot = await getDocs(guestCol);
      const guestData = guestSnapshot.docs
      .filter(doc => doc.id === "guest")
      .map(doc => doc.data());
        
      const guestListObject = {};
      guestData.forEach(data => {
        Object.keys(data).forEach(docKey => {
          guestListObject[docKey] = data[docKey];
        });
      });
    
      console.log(guestListObject); // 현재 모든 게스트북이 들어감
      setGuestList(guestListObject);
    } catch (error) {
      console.error("Firebase Error:", error);
    }
  }

  useEffect(() => {
    // Firebase에서 데이터 가져오는 함수
      console.log('ee');
      fetchGuestList(); // 데이터 가져오기 함수 호출
  }, []);

  const addEntry = async() => {
    try {
      const currentDate = new Date();
      const timestamp = currentDate.getTime();

      const docData = {
        title: newEntry.title,
        contents: newEntry.contents,
        author: newEntry.author,
      };

      const docReference = doc(userdb, "soobang/guest");
      await updateDoc(docReference ,{[timestamp]:docData} );
      
      
      const updatedGuestList = [...Object.values(guestlist), {[timestamp]: docData}];
      setGuestList(updatedGuestList);
      fetchGuestList();

      setNewEntry({title: '', contents: '', author: ''});
      setPopupOpen(false);

    } catch(error){
      console.error("firebase error: ",error);
    }
  };  

  const GuestHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

  const GuestText = styled.p`
    font-size: 16px;
  `;
  
  
  return (
    <GuestbookContainer>
      <GuestHeader>Soobang's Guest House</GuestHeader>
      <GuestText>게스트를 위한 공간입니다. 벽돌을 쌓아 게스트하우스를 완성해주세요!
      </GuestText>
      <AddButton onClick={() => setPopupOpen(true)}>벽돌 쌓으러가기</AddButton>
      <GuestBookItem guestArray={guestArray} />
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen}>
          <ButtonClose onClick={() => setPopupOpen(false)}> ×</ButtonClose>
         
         
          <h2>방명록 벽돌</h2>
          
          <InputGroup>
            <label>벽돌명</label>
            <input
              type="text"
              placeholder="벽돌의 이름을 지어주세요."
              value={newEntry.title}
              onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            <label>속재료</label>
            <textarea
              placeholder="벽돌의 속재료를 채워주세요."
              value={newEntry.contents}
              onChange={(e) => setNewEntry({ ...newEntry, contents: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            <label>지은이 </label>
            <input
              type="text"
              placeholder="made by"
              value={newEntry.author}
              onChange={(e) => setNewEntry({ ...newEntry, author: e.target.value })}
            />
          </InputGroup>
          <ButtonGroup>
            <button onClick={addEntry}>벽돌 쌓기</button>
          </ButtonGroup>
        </Popup>
      )}
    
    </GuestbookContainer>
  );
}

export default GuestBook;
