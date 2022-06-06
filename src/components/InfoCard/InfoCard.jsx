import React, { useState } from "react";

import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>プロフィールページ</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="Info">
        <span>
          <b>お住まいの国 </b>
        </span>
        <span>日本</span>
      </div>

      <div className="Info">
        <span>
          <b>お住まいの地域 </b>
        </span>
        <span>愛知県名古屋市</span>
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
