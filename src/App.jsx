import { useState } from 'react';
import './App.css'
import Modal from './Modal';

function App() {

  // 데이터 바인딩
  let post = '강남제육맛집';

  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);

  const [createDate, setCreateDate] = useState([
    '2025-5-1',
    '2025-6-1',
    '2025-7-1',
  ]);

  // 좋아요 누름 숫자를 보관할 스테이트
  const [like, setLike] = useState([0,0,0]);

  // 좋아요 처리 함수
  // function addLikes(num){
  //   setLike(like[num]+1)
  // }

  function changeTitle(){
    const newTitle = [... title];
    newTitle[0] = '여자코드추천';
    setTitle(newTitle);
  }

  //직전 선택한 인덱스를 저장할 스테이트
  const [currentIndex, SetCurrentIndex]= useState(null);


  // 모달페이지가 보이게/안보이게 작업하기위한 스테이트
  const [modal, setModal] = useState(true);

  //제목 클릭시 모달 보이기
  function handleTitle(index){
    //조건 : 같은 제목을 클릭하면 나타나고  사라짐
    // 다른 제목을 클릭하면 그대로 보여야 하고
    if(! modal){
      setModal(true);
      SetCurrentIndex(index);
    } else if(currentIndex === index){
        //2. 같은 타이틀이 선택된 경우
        setModal(false);
    } else{
      SetCurrentIndex(index);
    }
    // 
  }

  return (
    <div className='App'>
      <div className='black-bg'>
        React + Vite로 만드는 블로그
      </div>
      {/* <h4 style={{color: 'red', fontSize: '20px'}}>{post}</h4> */}

      {/* 타이틀 정렬하기 */}
      <button onClick={()=>{
        const sortedTitle = [...title].sort()
        setTitle(sortedTitle);
      }}>글 정렬하기</button>

      <div className='list'>
<<<<<<< HEAD
        <div>
          <h4 onClick={()=>{
            setModal(! modal)
          }}></h4>
          <h4>{title[0]}<span onClick={()=>{
            const newLikes = [... like]
            newLikes[0]++
            setLike(newLikes)
          }}>👍</span>{like[0]} 
=======
      {title.map((item, index)=>{
        return(
            <div key={index}>
          <h4 onClick={()=> handleTitle(index)}>
           {title[index]}
            <span onClick={()=>{
              const newLikes = [... like]
              newLikes[index]++
              setLike(newLikes)
              }}>👍
            </span>{like[index]} 
>>>>>>> 1767d8d (모달처리)
          
         
          </h4>      
          <p>작성일 : {createDate[index]}</p>
        </div>
        )
      })}
             
      </div>

      {/* 상세페이지 나타날 곳 */}
      {modal ? <Modal />: null }
    </div>
  )
}

export default App