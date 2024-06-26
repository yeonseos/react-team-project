import React, { useState, useEffect } from "react";
import "./BoardDetail.style.css";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage, firestore } from "../../../../firebase";
import {
  doc,
  getDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import Reply from "../../component/Reply";
const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchBoard = async () => {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const boardData = docSnap.data();
        const timestamp = boardData.date;
        const date = new Date(timestamp.seconds * 1000);
        const formattedDate = `${date.getFullYear()}-${String(
          date.getMonth() + 1
        ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
        setBoard({ ...boardData, date: formattedDate });
      } else {
      }
    };
    fetchBoard();
  }, [id]);

  const handleDelete = async () => {
    try {
      // 댓글 삭제
      await deleteComments(id);

      // 이미지 삭제
      if (board.imageUrl) {
        const imageRef = ref(storage, board.imageUrl);
        await deleteObject(imageRef);
      }

      // 게시물 삭제
      await deleteDoc(doc(db, "items", id));
      alert("게시물이 삭제되었습니다!");
      navigate("/board");
    } catch (error) {
      console.error("게시물 삭제 중 오류가 발생했습니다:", error);
    }
  };

  const deleteComments = async (boardId) => {
    try {
      const q = query(collection(db, "reply"), where("boardId", "==", boardId));
      const querySnapshot = await getDocs(q);
      const batch = firestore.batch();
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    } catch (error) {
      console.error("댓글 삭제 중 오류가 발생했습니다:", error);
    }
  };

  if (!board) {
    return <div>Loading...</div>;
  }

  const confirmDelete = () => {
    const result = window.confirm("정말 삭제하시겠습니까?");
    if (result) {
      handleDelete();
    }
  };

  const goToUpdatePage = () => {
    navigate(`/board/edit/${id}`);
  };

  return (
    <div className="board-detail-wrap">
      <div className="board-post-area">
        <div className="board-img-box">
          <img src={board?.imageUrl} alt="리뷰 이미지" />
        </div>
        <div className="board-content-box">
          <p>게시물</p>
          <div className="detail-user-box">
            {board.profileImg ? (
              <img src={board.profileImg} alt="사용자 이미지" />
            ) : (
              <img
                src="https://i.pinimg.com/736x/e9/ce/91/e9ce91bbb0d18e5555b1bbd3745a0fef.jpg"
                alt="사용자 이미지"
              />
            )}
            <p>{board?.user}</p>
          </div>
          <h3>
            <span className="cafe-title">카페명</span>{" "}
            <span className="cafe-title-text">{board?.title}</span>
          </h3>
          <p
            className="board-review-content"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {board?.content}
          </p>

          <div className="board-detail-hashtags">
            {board?.hashtags.map((tag, index) => (
              <span key={index}># {tag}</span>
            ))}
          </div>

          <div className="position-box">
            <div className="board-date-box">{board?.date}</div>
            <div className="modify-btn-box">
              <button onClick={goToUpdatePage}>수정</button>
              <button className="delete-btn" onClick={confirmDelete}>
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
      <Reply boardId={id} />
    </div>
  );
};

export default BoardDetail;
