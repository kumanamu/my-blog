import { useState } from 'react';
import './App.css'

function App() {

  //데이터 바인딩
    let post = '강남제육맛집';

    const[title, setTitle]= useState([
      '남자코트추천',
      '강남우동맛집',
      '자바스터뒤'
    
    
    ]);

    const [createDate, setCreateDate] = useState([
      '2025-5-1',
      '2025-6-1',
      '2025-7-1'
    ]);



//좋아요 누름 숫자를 보관할 스테이트
const[like, setLike] = useState([0,0,0]);

//좋아요 처리 함수
// function addLikes(num){
//   let likeArr=[... like]
//   setLike(li)
// }

function changeTitle(){
const newTitle = [... title]
newTitle[0] = '여자코트추천'
setTitle(newTitle);
}



  return (
 <div className='App'>
<div className='black-bg'>
  리액트+비트로 만드는 블러그
</div>
{/* <h4 style={{color: 'red', fontSize: '50px'}}>{post}</h4> */}

{/* 타이틀 정렬하기*/}
<button onClick={()=>{
  const sortedTitle = [... title].sort()

}

}>타이틀정렬하기</button>

<div className='list'>

 <div>
   <h4>{title[0]}<span onClick={()=>{
    const newLikes = [...like]
    newLikes[0]++
    setLike(newLikes)
   }}>👍</span>{like[0]}
   
   {/* //변경단추 클릭하면 남자코트추천>여자코트추천// */}
   <button onClick={changeTitle}>변경</button>
   </h4>
  <p>작성일 : {createDate[0]}</p>






 </div>
  <div>
    <h4>{title[1]}<span onClick={()=>{
   const newLikes = [... like]
   newLikes[1]++
   setLike(newLikes)
   }}>👍</span>{like[1]}</h4>
  <p>작성일 : {createDate[1]}</p>
 </div>
  <div>
  <h4>{title[2]}<span onClick={()=>{
      const newLikes = [... like]
   newLikes[2]++
    setLike(newLikes)
   }}>👍</span>{like[2]}</h4>
  <p>작성일 : {createDate[2]}</p>
 </div>
</div>
{/* 모달창 만들기*/}

function Modal1(){
  return(
    <div className='modal1'>
  <h4>제목</h4>
  <p> 날짜  </p>
  <p> 상세내용 </p>
</div>
 </div>
  )
}

export default App
