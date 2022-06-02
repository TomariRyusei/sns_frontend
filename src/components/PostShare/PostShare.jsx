import React, { useState, useRef } from "react";

import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="いまどうしてる？" />
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
          <button className="button PostButton">シェアする</button>

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
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
