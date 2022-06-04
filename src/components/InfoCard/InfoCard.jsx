import React from "react";

import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>プロフィールページ</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>

      <div className="Info">
        <span>
          <b>活動エリア </b>
        </span>
        <span>日本</span>
      </div>

      <div className="Info">
        <span>
          <b>お仕事 </b>
        </span>
        <span>WEBエンジニア</span>
      </div>

      <button className="button LogoutButton">ログアウト</button>
    </div>
  );
};

export default InfoCard;
