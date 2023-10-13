import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const TitleInput = styled.input`
  width: 99%;
  padding: 30px 10px;
  margin: 10px 0px;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid lightgrey;
  outline: none; /* 커서 또는 마우스 호버 시 테두리 제거 */
  text-align: center; /* 텍스트 가운데 정렬 */
  font-family: 'Noto Sans KR', cursive; 

`;


const SaveButton = styled.button`
background-color: #44c899; /* 초록색 배경 */
color: #fff; /* 흰색 텍스트 */
padding: 10px 20px;
border: none;
border-radius: 2px;
cursor: pointer;
position: absolute;
bottom: 20px;
right: 20px; /* 오른쪽 하단 위치 */
transition: background-color 0.2s; /* 색 변화에 애니메이션 추가 */

&:hover {
  background-color: #35996d; /* 마우스 호버 시 어두운 초록색으로 변경 */
}
`;

function WritingDiary() {

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const handleSave = async () => {
        //제출
    };

    const modules = {
     toolbar: {
       container: [
         ["bold", 'italic', 'underline'],
         ["link", "image"],
         [{ header: [1, 2, 3, 4, 5, false] }],
         ["code-block","blockquote"],
         [{ align: [false,"center","right","justify"]}],
         [{ color: ["red","blue","green","black"]}],
         ["clean"],
        ],
     },
    };

    return (
     <>
    <div style={{ height: "95vh", overflowY: "auto" }}>
       <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         <ReactQuill
           style={{ height: "400px", marginLeft: "9px"}}
           modules={modules}
           value={content}
           onChange={setContent}
         />
        <SaveButton onClick={handleSave}>작성하기</SaveButton>
       
    </div>
     </>
    );
    }



export default WritingDiary;
