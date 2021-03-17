import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../config";
import { Container, Row, Col, Button } from "react-bootstrap";

const List = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const history = useHistory();

  const [users, setUsers] = useState([]);

  if (!isLogin) {
    history.push("/");
  }

  useEffect(() => {
    axios
      .get(API_BASE + "/registration/all")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data.patients);
      })
      .catch((err) => console.log(err));
  }, []);

  const GoToWelfare = (id) => {
    history.push("/welfare/" + id);
  };

  return (
    <Container>
      <h1>List</h1>
      {users.map((user, ind) => (
        <Row key={ind} className="row-border py-2">
          <Col>{user.MRNo}</Col>
          <Col>{user.Name}</Col>
          <Col>{user.FatherOrHusband}</Col>
          <Col>
            <Button variant="dark" className="mx-1">
              Edit
            </Button>
            <Button variant="dark" className="mx-1">
              Delete
            </Button>
            <Button
              variant="dark"
              className="mx-1"
              onClick={() => GoToWelfare(user._id)}
            >
              Welfare
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default List;
