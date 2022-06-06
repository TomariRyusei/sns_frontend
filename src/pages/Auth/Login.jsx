import React from "react";

function LogIn() {
  return (
    <div className="AuthPageRight">
      <form className="InfoForm AuthForm">
        <h3>ログイン</h3>

        <div>
          <input
            type="text"
            placeholder="ユーザー名"
            className="InfoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="InfoInput"
            placeholder="パスワード"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            アカウントをお持ちでないようです。登録をお願いします。
          </span>
          <button className="button InfoButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
