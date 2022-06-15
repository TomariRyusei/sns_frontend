import React, { useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../actions/AuthAction";

const Auth = () => {
  // フォームデータの初期値
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };

  // ログイン/登録の表示切り替え
  const [isSignUp, setIsSignUp] = useState(true);

  // フォームデータ
  const [data, setData] = useState(initialState);

  // 登録時パスワード一致確認
  const [confirmPass, setConfirmPass] = useState(true);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.AuthReducer.loading);

  const handleFormDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // フォームサブミット
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(login(data));
    }
  };

  //　フォーム情報を初期化
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(true);
  };

  return (
    <div className="Auth">
      <div className="AuthPageLeft">
        <img src="" alt="" />
        <div className="AppName">
          <h1>No Name</h1>
          <h6>Twitterを模したSNSサービスです。名前はないです。</h6>
        </div>
      </div>
      <div className="AuthPageRight">
        <form className="InfoForm AuthForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "登録" : "ログイン"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="名"
                className="InfoInput"
                name="firstname"
                onChange={handleFormDataChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="姓"
                className="InfoInput"
                name="lastname"
                onChange={handleFormDataChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="InfoInput"
              name="username"
              placeholder="ユーザー名"
              onChange={handleFormDataChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="InfoInput"
              name="password"
              placeholder="パスワード"
              onChange={handleFormDataChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="InfoInput"
                name="confirmpass"
                placeholder="パスワード(確認用)"
                onChange={handleFormDataChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            ※確認用パスワードが一致しません。
          </span>

          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "すでにアカウントをお持ちの方はこちらから"
                : "アカウントをお持ちでない方はこちらから"}
            </span>
          </div>
          <button
            className="button InfoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "loading..." : isSignUp ? "登録" : "ログイン"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
