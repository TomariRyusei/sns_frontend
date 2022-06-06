import React from "react";

const SignUp = () => {
  return (
    <div className="AuthPageRight">
      <form className="InfoForm AuthForm">
        <h3>登録</h3>

        <div>
          <input
            type="text"
            placeholder="名"
            className="InfoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="姓"
            className="InfoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="username"
            placeholder="ユーザー名"
          />
        </div>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="password"
            placeholder="パスワード"
          />
          <input
            type="text"
            className="InfoInput"
            name="confirmpass"
            placeholder="パスワード(確認用)"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            すでにアカウントをお持ちのようです。 ログインしてください。
          </span>
        </div>
        <button className="button InfoButton" type="submit">
          登録
        </button>
      </form>
    </div>
  );
};

export default SignUp;
