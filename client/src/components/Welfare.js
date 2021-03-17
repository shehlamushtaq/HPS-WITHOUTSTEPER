import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE } from "../config";
import { Container, Row, Col, Button } from "react-bootstrap";

const Welfare = () => {
  const [welfareFormData, setwelfareFormData] = useState({
    MRNo: "recID",
    TokenNo: "",
    WelfareDate: new Date(),
    Profession: "",
    Fiqa: "",
    Education: "",
    Cast: "",
    MonthlyIncome: 0,
    Guardian: "",
    OtherInfo: "",
    MaleKids: "",
    FemaleKids: "",
    OtherKids: "",
    Brothers: "",
    Sisters: "",
    NoOFFamilyMembers: "",
    IsMarried: false,
    IsAbleToPay: false,
    IsEarning: false,
    IsZakat: false,
    IsDonation: false,
    HaveGold: false,
    ReqName: "",
    ReqPhone: "",
    ReqRelationWithPatient: "",
    CreateUser: "Admin",
    ModifyUser: "Admin",
  });
  const { id } = useParams();

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE + "/welfare/add/" + id)
      .then((res) => {
        console.log(res);
        setPatient(res.data.patient);
        
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = () => {
    // console.log(RegistrationFormData);
    axios
      .post(API_BASE + "/welfare/add", welfareFormData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container>
        <h1>Welfare</h1>
        <Row>
          <Col>MR #: {patient?.MRNo}</Col>
          <Col>Name: {patient?.Name}</Col>
        </Row>

        <Row>
          <Col sm>
            <input
              type="Number"
              placeholder="MRNo:"
              onChange={(e) =>
                setwelfareFormData({
                  ...welfareFormData,
                  MRNo: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="Number"
              placeholder="TokenNo"
              onChange={(e) =>
                setwelfareFormData({
                  ...welfareFormData,
                  TokenNo: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="Date"
              placeholder="RegistrationDate"
              onChange={(e) =>
                setwelfareFormData({
                  ...welfareFormData,
                  RegistrationDate: e.target.value,
                })
              }
            />
          </Col>
        </Row>
      </Container>
      //{" "}
      {/* //================================Second Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Contact</div>
          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="Profession"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Profession: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Education"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Education: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Fiqa"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Fiqa: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Cast"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Cast: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </Container>
        {/* </Container> */}
      </fieldset>
 {/* //================================Third Portion========================================= */}
 <fieldset>
        <Container className="border">
          <div className="legend">Requestor Info</div>
          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="ReqName"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    ReqName: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="RelationWithPatient"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    ReqRelationWithPatient: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="Male Kids"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    MaleKids: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="Female Kids"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    FemaleKids: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="ReqPhone"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    ReqPhone: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Guardian"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Guardian: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="OtherKids"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    OtherKids: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Brothers"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Brothers: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
          {/* ----------------------------------------------- */}

          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="MonthlyIncome"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    MonthlyIncome: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="OtherInfo"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    OtherInfo: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="Sisters"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Sisters: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="NoOFFamilyMembers"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    NoOFFamilyMembers: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </Container>
      </fieldset>

      {/* //================================Forth Portion=========================================  */}
      <fieldset>
        <Container className="border">
          <div className="legend">Staff Info</div>
          <Row>
            <Col sm>
              <input
                type="checkbox"
                checked={welfareFormData.IsMarried}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    IsMarried: e.target.checked,
                  })
                }
              />{" "}
              Married
            </Col>
            <Col sm>
              <input
                type="checkbox"
                checked={welfareFormData.IsEarning}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    IsEarning: e.target.checked,
                  })
                }
              />{" "}
              Is Ear
            </Col>
            <Col sm>
              <input
                type="checkbox"
                checked={welfareFormData.HaveGold}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    HaveGold: e.target.checked,
                  })
                }
              />{" "}
              Have Gold
            </Col>
            <Col sm>
              <input
                type="checkbox"
                checked={welfareFormData.IsAbleToPay}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    IsAbleToPay: e.target.checked,
                  })
                }
              />{" "}
              Is Able to Pay
            </Col>
            

          </Row>
        </Container>
      </fieldset>
      <Button onClick={handleSubmit} variant="primary" type="submit" size="lg">
        Save the Patient's Info
      </Button>

    </>
  );
};

export default Welfare;
