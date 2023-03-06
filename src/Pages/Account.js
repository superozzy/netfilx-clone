import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <Button onClick={handleLogout} bsStyle="danger">
        Logout
      </Button>
    </div>
  );
};

export default Account;
