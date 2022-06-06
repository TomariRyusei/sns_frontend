import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="InfoForm">
        <h3>あなたのプロフィール</h3>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="FirstName"
            placeholder="名"
          />

          <input
            type="text"
            className="InfoInput"
            name="LastName"
            placeholder="姓"
          />
        </div>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="worksAT"
            placeholder="お仕事"
          />
        </div>

        <div>
          <input
            type="text"
            className="InfoInput"
            name="livesIN"
            placeholder="お住まいの地域"
          />

          <input
            type="text"
            className="InfoInput"
            name="Country"
            placeholder="お住まいの国"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className="button InfoButton">更新する</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
