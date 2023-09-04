import React, { useState } from 'react';
import styled from 'styled-components';

const GuestbookContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

const AddButton = styled.button`
  background-color: #FF8181;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
  
`;

const Popup = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
  text-align: left;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const ButtonGroup = styled.div`
  text-align: right;

  button {
    background-color: #FF8181;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 5px;

    &:hover {
      background-color: #FF6060;
    }
  }
`;

const GuestbookList = styled.ul`
  list-style: none;
  width: 100px;
  padding: 0;
  margin: 0;
  text-align: center;

  li {
    margin: 20px 0;
    cursor: pointer;

    h2 {
      background-color: #FF8181;
      color: white;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    p {
      margin-top: 10px;
    }
  }
`;

function GuestBook() {
  const [guestbook, setGuestbook] = useState([]);
  const [newEntry, setNewEntry] = useState({ title: '', contents: '', author: '' });
  const [isPopupOpen, setPopupOpen] = useState(false);

  const addEntry = () => {
    // 입력된 내용을 guestbook에 추가
    setGuestbook([...guestbook, { ...newEntry, isOpen: false }]);

    // 입력 필드 초기화
    setNewEntry({ title: '', contents: '', author: '' });

    // 팝업 닫기
    setPopupOpen(false);
  };

  const toggleEntry = (index) => {
    // 클릭한 방명록의 내용 보이기/접기 토글
    const updatedGuestbook = guestbook.map((entry, i) => {
      if (i === index) {
        return { ...entry, isOpen: !entry.isOpen };
      }
      return entry;
    });
    setGuestbook(updatedGuestbook);
  };

  return (
    <GuestbookContainer>
      <h1> ~ Guest Book ~ </h1>
      <AddButton onClick={() => setPopupOpen(true)}>방명록 작성하기</AddButton>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen}>
          <h2>방명록 작성</h2>
          <InputGroup>
            <label>Title:</label>
            <input
              type="text"
              placeholder="Title"
              value={newEntry.title}
              onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            <label>Contents:</label>
            <textarea
              placeholder="Contents"
              value={newEntry.contents}
              onChange={(e) => setNewEntry({ ...newEntry, contents: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            <label>Author:</label>
            <input
              type="text"
              placeholder="Author"
              value={newEntry.author}
              onChange={(e) => setNewEntry({ ...newEntry, author: e.target.value })}
            />
          </InputGroup>
          <ButtonGroup>
            <button onClick={addEntry}>등록하기</button>
            <button onClick={() => setPopupOpen(false)}>취소</button>
          </ButtonGroup>
        </Popup>
      )}
      <GuestbookList>
        {guestbook.map((entry, index) => (
          <li key={index}>
            <h2 onClick={() => toggleEntry(index)}>{entry.title}</h2>
            {entry.isOpen && (
              <>
                <p>작성자: {entry.author}</p>
                <p>{entry.contents}</p>
              </>
            )}
          </li>
        ))}
      </GuestbookList>
    </GuestbookContainer>
  );
}

export default GuestBook;
