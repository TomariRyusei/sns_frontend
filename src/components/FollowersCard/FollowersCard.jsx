import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Followers.css";
import User from "../User/User";
import { getAllUser } from "../../api/UserRequests";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.AuthReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      console.log(data);
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FolloersCard">
      <h3>知り合いかも</h3>
      {persons.map((person, index) => {
        if (person._id !== user._id) {
          return <User person={person} key={index} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
