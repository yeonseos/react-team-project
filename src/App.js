import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./layout/Header/HeaderContainer";
import MainPage from "./pages/main/MainPage";
import SearchPage from "./pages/search/SearchPage";
import Detail from "./pages/detail/Detail";
import Board from "./pages/board/Board";
import BoardWrite from "./pages/board/pages/BoardWrite/BoardWrite";
import BoardDetail from "./pages/board/pages/BoardDetail/BoardDetail";
import Authenticate from "./pages/Authenticate/Authenticate/Authenticate";
import SignUpPage from "./pages/Authenticate/SignUp/SignUpPage";
import { useEffect } from "react";
import { login } from "./redux/reducer/authenciate/authenciateSlice";
import { useDispatch } from "react-redux";
import ForgotPasswordPage from "./pages/Authenticate/ForgotPasswordPage/ForgotPasswordPage";
import MyInformation from "./pages/Authenticate/MyInformation/MyInformation";
import UpdateMyInformation from "./pages/Authenticate/UpdateMyInformation/UpdateMyInformation";
import BoardUpdate from "./pages/board/pages/BoardUpdate/BoardUpdate";

function App() {
  /**
   * ( 새로 고침시에도 로그인 상태 유지 )
   * render 및 새로고침시  => 세션 유저 데이터 가져오기  => 해당 데이터를 redux data로 저장
   */

  const apikey = process.env.REACT_APP_FIREBASE_API_KEY;
  const appName = "[DEFAULT]";

  const dispatch = useDispatch();

  useEffect(() => {
    const getSessionStorageValue = JSON.parse(
      sessionStorage.getItem(`firebase:authUser:${apikey}:${appName}`)
    );

    if (getSessionStorageValue !== null) {
      const { displayName, email, photoURL, emailVerified, uid } =
        getSessionStorageValue;
      dispatch(login({ displayName, email, photoURL, emailVerified, uid }));
    }
  }, [apikey, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderContainer />}>
          <Route index element={<MainPage />} />
          <Route path="auth">
            <Route index element={<Authenticate />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="password" element={<ForgotPasswordPage />} />
            <Route path="myinfo">
              <Route index element={<MyInformation />} />
              <Route path="update" element={<UpdateMyInformation />} />
            </Route>
          </Route>
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:id" element={<Detail />} />
          <Route path="board">
            <Route index element={<Board />} />
            <Route path="write" element={<BoardWrite />} />
            <Route path="detail/:id" element={<BoardDetail />} />
            <Route path="edit/:id" element={<BoardUpdate />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
