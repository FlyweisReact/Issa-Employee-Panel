/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../../api/api";
import { editApi } from "../../../../../Repository/Apis";

const EditAdl = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [ loading , setLoading ] = useState(false)

  const { id } = useParams(

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const initialFormData = {
    patientId: "",
    date: "",
    selectingClothes: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    bathingOrShowering: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    combingHair: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    applyingLotion: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    laundry: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    dressing: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    shampooingHair: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    oralCareMorning: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },

    oralCareEvening: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    lunch: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    breakfast: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    dinner: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    amSnacks: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    pmSnack: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    amBowelMovement: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    pmBowelMovement: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    overnightBowelMovement: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    handAndFootNailCare: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
    bedMobility: {
      requiresNoAssistance: false,
      someAssistanceNeeded: false,
      completeAssistanceNeeded: false,
      notApplicable: false,
      refused: false,
      staffInitials: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCategoryInputChange = (category, categoryValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: {
        ...prevFormData[category],
        ...categoryValue,
      },
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(setLoading , "employee/createADLTrackingForm", formData);
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            ACTIVITIES OF DAILY LIVING TRACKING FORM
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={submitHandler}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Select Patient
              </Form.Label>
              <Form.Select
                onChange={handleInputChange}
                name="patientId"
                required
              >
                <option value="">Select Patient</option>
                {patients?.data?.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.fullName}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                name="date"
                onChange={handleInputChange}
                type="date"
                required
              />
            </Form.Group>

            <p>ADLS</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.selectingClothes.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("selectingClothes", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.selectingClothes.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("selectingClothes", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.selectingClothes.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("selectingClothes", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.selectingClothes.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("selectingClothes", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.selectingClothes.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("selectingClothes", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                name="staffInitials"
                value={formData.selectingClothes.staffInitials}
                onChange={(e) =>
                  handleCategoryInputChange("selectingClothes", {
                    staffInitials: e.target.value,
                  })
                }
                type="text"
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Bathing or Showering
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.bathingOrShowering.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("bathingOrShowering", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bathingOrShowering.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("bathingOrShowering", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bathingOrShowering.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("bathingOrShowering", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bathingOrShowering.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("bathingOrShowering", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bathingOrShowering.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("bathingOrShowering", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                name="staffInitials"
                onChange={(e) =>
                  handleCategoryInputChange("bathingOrShowering", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Combing Hair
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("combingHair", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("combingHair", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("combingHair", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("combingHair", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("combingHair", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                name="staffInitials"
                onChange={(e) =>
                  handleCategoryInputChange("combingHair", {
                    staffInitials: e.target.value,
                  })
                }
                required
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Applying Lotion
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.applyingLotion}
                  onChange={(e) =>
                    handleCategoryInputChange("applyingLotion", {
                      applyingLotion: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("someAssistanceNeeded", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("completeAssistanceNeeded", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("notApplicable", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.combingHair.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("refused", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                name="staffInitials"
                onChange={(e) =>
                  handleCategoryInputChange("applyingLotion", {
                    staffInitials: e.target.value,
                  })
                }
                required
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Laundry</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.laundry.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("laundry", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.laundry.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("laundry", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.laundry.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("laundry", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.laundry.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("laundry", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.laundry.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("laundry", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("laundry", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Dressing</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.dressing.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("dressing", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dressing.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("dressing", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dressing.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("dressing", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dressing.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("dressing", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dressing.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("dressing", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                name="staffInitials"
                onChange={(e) =>
                  handleCategoryInputChange("dressing", {
                    staffInitials: e.target.value,
                  })
                }
                type="text"
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Shampooing Hair
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.shampooingHair.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("shampooingHair", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.shampooingHair.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("shampooingHair", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.shampooingHair.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("shampooingHair", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.shampooingHair.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("shampooingHair", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.shampooingHair.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("shampooingHair", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("shampooingHair", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Oral Care Morning
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.oralCareMorning.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("oralCareMorning", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.oralCareMorning.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("oralCareMorning", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.oralCareMorning.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("oralCareMorning", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.oralCareMorning.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("oralCareMorning", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.oralCareMorning.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("oralCareMorning", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("oralCareMorning", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Breakfast</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.breakfast.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("breakfast", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.breakfast.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("breakfast", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.breakfast.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("breakfast", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.breakfast.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("breakfast", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.breakfast.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("breakfast", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("breakfast", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.lunch.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("lunch", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.lunch.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("lunch", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.lunch.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("lunch", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.lunch.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("lunch", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.lunch.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("lunch", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("lunch", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Dinner</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.dinner.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("dinner", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dinner.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("dinner", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dinner.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("dinner", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dinner.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("dinner", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dinner.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("dinner", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("dinner", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>AM Snack</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.amSnacks.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("amSnacks", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amSnacks.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("amSnacks", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amSnacks.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("amSnacks", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amSnacks.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("amSnacks", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amSnacks.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("amSnacks", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("amSnacks", {
                    staffInitials: e.target.value,
                  })
                }
                required
                value={formData.amSnacks.staffInitials}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                AM Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.amBowelMovement.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("amBowelMovement", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amBowelMovement.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("amBowelMovement", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amBowelMovement.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("amBowelMovement", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amBowelMovement.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("amBowelMovement", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.amBowelMovement.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("amBowelMovement", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleCategoryInputChange("amBowelMovement", {
                    staffInitials: e.target.value,
                  })
                }
                required
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                PM Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.pmBowelMovement.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("pmBowelMovement", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.pmBowelMovement.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("pmBowelMovement", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.pmBowelMovement.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("pmBowelMovement", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.pmBowelMovement.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("pmBowelMovement", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.pmBowelMovement.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("pmBowelMovement", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleCategoryInputChange("pmBowelMovement", {
                    staffInitials: e.target.value,
                  })
                }
                type="text"
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Overnight Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.overnightBowelMovement.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("overnightBowelMovement", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.overnightBowelMovement.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("overnightBowelMovement", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={
                    formData.overnightBowelMovement.completeAssistanceNeeded
                  }
                  onChange={(e) =>
                    handleCategoryInputChange("overnightBowelMovement", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.overnightBowelMovement.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("overnightBowelMovement", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.overnightBowelMovement.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("overnightBowelMovement", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleCategoryInputChange("overnightBowelMovement", {
                    staffInitials: e.target.value,
                  })
                }
                type="text"
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Hand & Foot nail care
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.handAndFootNailCare.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("handAndFootNailCare", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.handAndFootNailCare.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("handAndFootNailCare", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={
                    formData.handAndFootNailCare.completeAssistanceNeeded
                  }
                  onChange={(e) =>
                    handleCategoryInputChange("handAndFootNailCare", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.handAndFootNailCare.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("handAndFootNailCare", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.handAndFootNailCare.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("handAndFootNailCare", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("handAndFootNailCare", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Bed Mobility
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={formData.bedMobility.requiresNoAssistance}
                  onChange={(e) =>
                    handleCategoryInputChange("bedMobility", {
                      requiresNoAssistance: e.target.checked,
                    })
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bedMobility.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("bedMobility", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bedMobility.completeAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("bedMobility", {
                      completeAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bedMobility.notApplicable}
                  onChange={(e) =>
                    handleCategoryInputChange("bedMobility", {
                      notApplicable: e.target.checked,
                    })
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.bedMobility.refused}
                  onChange={(e) =>
                    handleCategoryInputChange("bedMobility", {
                      refused: e.target.checked,
                    })
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleCategoryInputChange("handAndFootNailCare", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Staff members are to initial once ADLs is completed on each
                shift.{" "}
              </Form.Label>
            </Form.Group>
            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                }}
                type="submit"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EditAdl;
