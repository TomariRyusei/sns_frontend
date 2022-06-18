import React, { useState, useRef } from "react";

import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadAction";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const loading = useSelector((state) => state.PostReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(uploadPost(newPost));
    resetShare();
  };

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt=""
      />
      <div>
        <input type="text" placeholder="いまどうしてる？" ref={desc} required />
        <div className="PostOptions">
          {/* 画像アップロードフォームの参照をクリック */}
          <div
            className="Option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            写真
          </div>
          <div className="Option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            ビデオ
          </div>
          <div className="Option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            位置情報
          </div>
          <div className="Option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            スケジュール
          </div>
          <button
            className="button PostButton"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "シェアする"}
          </button>

          {/* 画像アップロードフォーム(非表示) */}
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {/* 画像プレビュー */}
        {image && (
          <div className="PreviewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
