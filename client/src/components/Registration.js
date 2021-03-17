import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { API_BASE } from "../config";
import { Col, Row, Container, Button } from "react-bootstrap";
import axios from "axios";
const Registration = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const history = useHistory();

  const [RegistrationFormData, setRegistrationFormData] = useState({
    MRNo: "",
    TokenNo: "",
    RegistrationDate: new Date(),
    Name: "",
    FatherOrHusband: "",
    DOB: new Date(),
    Age: "",
    Gender: "0",
    Religion: "0",
    HelpType: "0",
    District: "",
    City: "",
    Area: "",
    HousNo: "",
    Address: "",
    CNIC: "",
    Phone: "",
    OffPhone: "",
    Mobile: "",
    RefBy: "",
    Remarks: "",
    IsRejected: false,
    IsZakat: false,
    IsPAFEmp: false,
    MonthlyConsLimit: 0,
    ThumbImage: "",
    NOY: "",
    EmpID: "",
    IsStaff: false,
    CreateUser: "",
    ModifyUser: "",
    CreateDate: "",
    ModifyDate: "",
  });
  if (!isLogin) {
    history.push("/");
  }
  const handleSubmit = () => {
    // console.log(RegistrationFormData);
    axios
      .post(API_BASE + "/registration/add", RegistrationFormData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Registration</h1>
      <Container>
        <Row>
          <Col sm>
            <input
              type="Number"
              placeholder="MRNo:"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
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
                setRegistrationFormData({
                  ...RegistrationFormData,
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
                setRegistrationFormData({
                  ...RegistrationFormData,
                  RegistrationDate: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
        </Row>

        {/* ---------------------------------------- */}

        <Row>
          <Col sm>
            <input
              type="text"
              placeholder="FatherOrHusband"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  FatherOrHusband: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="Date"
              placeholder="DOB"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  DOB: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="Number"
              placeholder="Age"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Age: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <select
              placeholder="Gender"
              value={RegistrationFormData.Gender}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Gender: e.target.value,
                })
              }
            >
              <option value="0">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </Col>
        </Row>

        {/* ----------------------------------------------- */}

        <Row>
          <Col sm>
            <select
              value={RegistrationFormData.Religion}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Religion: e.target.value,
                })
              }
            >
              <option value="0">Religion</option>
              <option value="Islam">Islam</option>
              <option value="Christian">Christian</option>
              <option value="Other">Other</option>
            </select>
          </Col>
          <Col sm>
            <select
              value={RegistrationFormData.HelpType}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  HelpType: e.target.value,
                })
              }
            >
              <option value="0">Help Type</option>
              <option value="Donation">Donation</option>
              {RegistrationFormData.Religion === "Islam" ? (
                <option value="Zakat">Zakat</option>
              ) : null}
            </select>
          </Col>
          <Col>
            <input
              type="text"
              placeholder="CNIC"
              value={RegistrationFormData.CNIC}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  CNIC: e.target.value,
                })
              }
            />
          </Col>
          <Col></Col>
        </Row>
        {/* ----------------------------------------------- */}
      </Container>
      {/* //================================Second Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Contact</div>
          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="HousNo"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    HousNo: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Address"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Address: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Area"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Area: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="City"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    City: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          {/* ---------------------------------------- */}

          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="District"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    District: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="Phone"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Phone: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="OffPhone"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    OffPhone: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="Mobile"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Mobile: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm>
              <input
                type="Number"
                placeholder="MonthlyConsumption"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    MonthlyConsLimit: e.target.value,
                  })
                }
              />
            </Col>

            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </fieldset>
      {/* //================================Third Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Referrer Info</div>
          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="RefBy"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    RefBy: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="EmpID"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    EmpID: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="Number"
                placeholder="NOY"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    NOY: e.target.value,
                  })
                }
              />
            </Col>
            <Col></Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="Remarks"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Remarks: e.target.value,
                  })
                }
              />
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </fieldset>
      {/* //================================Forth Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Staff Info</div>
          <Row>
            <Col sm>
              <input
                type="checkbox"
                checked={RegistrationFormData.IsPAFEmp}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    IsPAFEmp: e.target.checked,
                  })
                }
              />{" "}
              Is PAF Employee
            </Col>
            <Col sm>
              <input
                type="checkbox"
                checked={RegistrationFormData.IsStaff}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    IsStaff: e.target.checked,
                  })
                }
              />{" "}
              Is Staff
            </Col>
            <Col sm>
              <input
                type="checkbox"
                checked={RegistrationFormData.IsRejected}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    IsRejected: e.target.checked,
                  })
                }
              />{" "}
              Is Rejected
            </Col>
          </Row>
        </Container>
      </fieldset>
      <Button onClick={handleSubmit} variant="primary" type="submit" size="lg">
        Save the Patient's Info
      </Button>
    </div>
  );
};

export default Registration;
