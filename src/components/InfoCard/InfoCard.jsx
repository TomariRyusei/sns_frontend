import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import * as UserApi from "../../api/UserRequests.js";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { logout } from "../../actions/AuthAction";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.AuthReducer.authData);
  // URL内のパラメータ(id)を取得
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>プロフィール情報</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="Info">
        <span>
          <b>国 </b>
        </span>
        <span>{profileUser.country}</span>
      </div>

      <div className="Info">
        <span>
          <b>お住まい </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>

      <div className="Info">
        <span>
          <b>お仕事 </b>
        </span>
        <span>{profileUser.work}</span>
      </div>

      <button className="button LogoutButton" onClick={handleLogOut}>
        ログアウト
      </button>
    </div>
  );
};

export default InfoCard;
