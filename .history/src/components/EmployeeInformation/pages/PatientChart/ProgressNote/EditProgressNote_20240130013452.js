/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../../api/api";
import { editApi, fetchApi } from "../../../../../Repository/Apis";
import {
  CheckBoxMaker,
  DateFormatter,
  InputMaker,
  MultiSelect,
  SelectMaker,
} from "../../../../../Helper/Makers";


const EditProgressNote = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [admitDate, setAdmitDate] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [
    medicationAdministrationCompleted,
    setMedicationAdministrationCompleted,
  ] = useState(true);
  const [
    assistanceInMedicationAdministrationCompleted,
    setAssistanceInMedicationAdministrationCompleted,
  ] = useState(false);
  const [healthAndWelfareChecksCompleted, setHealthAndWelfareChecksCompleted] =
    useState(true);
  const [communityLivingSupport, setCommunityLivingSupport] = useState("");
  const [therapy, setTherapy] = useState([]);
  const [mood, setMood] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const [communityOutings, setCommunityOutings] = useState(true);
  const [religiousService, setReligiousService] = useState(false);
  const [adlsCompleted, setAdlsCompleted] = useState(true);
  const [mealPreparation, setMealPreparation] = useState(false);
  const [transportation, setTransportation] = useState(true);
  const [residentRedirectedOnBehaviors, setResidentRedirectedOnBehaviors] =
    useState(false);
  const [awolElopement, setAwolElopement] = useState(true);
  const [noteSummary, setNoteSummary] = useState("");
  const [bhtName, setBhtName] = useState("");
  const [bhtSignature, setBhtSignature] = useState("");
  const { id } = useParams();
  const [response, setResponse] = useState({});
  const [loading1, setLoading2] = useState(false);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const fetchHandler = () => {
    fetchApi(setLoading2, `employee/getProgressNoteById/${id}`, setResponse);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const payload = {
    patientId,
    residentName,
    dateOfBirth,
    admitDate,
    date,
    shift,
    medicationAdministrationCompleted,
    assistanceInMedicationAdministrationCompleted,
    healthAndWelfareChecksCompleted,
    communityLivingSupport,
    therapy: therapy?.map((i) => i.value),
    mood: mood?.map((i) => i.value),
    appointment: appointment?.map((i) => i.value),
    communityOutings,
    religiousService,
    adlsCompleted,
    mealPreparation,
    transportation,
    residentRedirectedOnBehaviors,
    awolElopement,
    noteSummary,
    bhtName,
    bhtSignature,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editApi(setLoading, `employee/editProgressNoteById/${id}`, payload);
  };

  const patientHandler = (e) => {
    const obj = JSON.parse(e);
    setPatientId(obj._id);
    setResidentName(obj.fullName);
  };

  useEffect(() => {
    if (response) {
      const item = response?.data?.data;
      setDateOfBirth(item?.dateOfBirth);
      setAdmitDate(item?.admitDate);
      setDate(item?.date);
      setBhtSignature(item?.bhtSignature);
      setBhtName(item?.bhtName);
      setNoteSummary(item?.noteSummary);
      setAwolElopement(item?.awolElopement);
      setResidentRedirectedOnBehaviors(item?.residentRedirectedOnBehaviors);
      setTransportation(item?.transportation);
      setMealPreparation(item?.mealPreparation);
      setAdlsCompleted(item?.adlsCompleted);
      setReligiousService(item?.religiousService);
      setCommunityOutings(item?.setCommunityOutings);
      setCommunityLivingSupport(item?.communityLivingSupport);
      setHealthAndWelfareChecksCompleted(item?.healthAndWelfareChecksCompleted);
      setAssistanceInMedicationAdministrationCompleted(
        item?.assistanceInMedicationAdministrationCompleted
      );
      setMedicationAdministrationCompleted(
        item?.medicationAdministrationCompleted
      );
      if (item?.mood) {
        const uniqueMoods = new Set([...mood, ...item?.mood]);
        const uniqueMoodArray = Array.from(uniqueMoods)?.map((moodItem) => ({
          value: moodItem,
          label: moodItem,
        }));
        setMood(uniqueMoodArray);
      }
      if (item?.therapy) {
        const uniqueMoods = new Set([...therapy, ...item?.therapy]);
        const uniqueMoodArray = Array.from(uniqueMoods)?.map((moodItem) => ({
          value: moodItem,
          label: moodItem,
        }));
        setTherapy(uniqueMoodArray);
      }
      if (item?.appointment) {
        const uniqueMoods = new Set([...therapy, ...item.appointment]);
        const uniqueMoodArray = Array.from(uniqueMoods)?.map((moodItem) => ({
          value: moodItem,
          label: moodItem,
        }));
        setAppointment(uniqueMoodArray);
      }
    }
  }, [response]);

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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>CONTACT NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={handleSubmit}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident’s Name:
              </Form.Label>
              <Form.Select
                required
                onChange={(e) => patientHandler(e.target.value)}
              >
                <option value="">Select</option>
                {patients?.data?.map((patient) => (
                  <option value={JSON.stringify(patient)}>
                    {patient?.fullName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <SelectMaker
              label={"Community Living Support"}
              setValue={setCommunityLivingSupport}
              options={[
                {
                  label: "Monitors",
                  value: "monitors",
                },
                {
                  label: "Prompts",
                  value: "prompts",
                },
              ]}
              value={communityLivingSupport}
            />

            <InputMaker
              label={"Admit Date"}
              setState={setAdmitDate}
              placeholder=""
              type="date"
              value={DateFormatter(admitDate)}
            />
            <InputMaker
              label={"Date of Birth"}
              setState={setDateOfBirth}
              placeholder=""
              type="date"
              value={DateFormatter(dateOfBirth)}
            />

            <InputMaker
              label={"Date"}
              setState={setDate}
              placeholder=""
              type="date"
              value={DateFormatter(date)}
            />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Shift
              </Form.Label>
              <Form.Select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="7am-3pm">7am-3pm</option>
                <option value="3pm-11pm">3pm-11pm</option>
                <option value="11pm-7am">11pm-7am</option>
                <option value="8am-4pm">8am-4pm</option>
                <option value="4pm-12am">4pm-12am</option>
                <option value="12am-8am">12am-8am</option>
                <option value="7am-7pm">7am-7pm</option>
                <option value="7pm-7am">7pm-7am</option>
                <option value="8am-8pm">8am-8pm</option>
                <option value="8pm-8am">8pm-8am</option>
              </Form.Select>
            </Form.Group>

            <p style={{ fontWeight: "500" }}>
              I=Independent R=Refusal PA=Physical Assist LOA= Leave of absence
              H=Hospitalization I=Independent VP= Verbal Prompt NP= No Prompt M=
              Monitoring Y=Yes N=No HP=Home Pass NA=Not Applicable
            </p>
            <p>Community Living Support(Monitors and Prompts)</p>

            <SelectMaker
              label={"Was Medication administration completed?"}
              setValue={setMedicationAdministrationCompleted}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
              value={medicationAdministrationCompleted}
            />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Was Assistance in the self administration of medication
                completed?
              </Form.Label>
              <Form.Select
                onChange={(e) =>
                  setAssistanceInMedicationAdministrationCompleted(
                    e.target.value
                  )
                }
                value={assistanceInMedicationAdministrationCompleted}
                required
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Were Health and Welfare Checks completed every 15 minutes to 1
                hour?
              </Form.Label>
              <Form.Select
                onChange={(e) =>
                  setHealthAndWelfareChecksCompleted(e.target.value)
                }
                value={healthAndWelfareChecksCompleted}
                required
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Therapy:
              </Form.Label>

              <MultiSelect
                options={therapyOptions}
                value={therapy}
                setValue={setTherapy}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Mood:
              </Form.Label>
              <MultiSelect
                options={moodOptions}
                setValue={setMood}
                value={mood}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Appointment
              </Form.Label>
              <MultiSelect
                options={appointmentOptions}
                value={appointment}
                setValue={setAppointment}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Emergency Appointment
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Religious Services</Form.Label>
              <Form.Select
                onChange={(e) => setReligiousService(e.target.value)}
                value={religiousService}
                required
              >
                <option value="">Select</option>
                <option value={true}> Yes </option>
                <option value={false}> No </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Community Outings</Form.Label>
              <div className="checkbox-container ">
                <CheckBoxMaker
                  value={!communityOutings}
                  setValue={setCommunityOutings}
                  label={"Outings"}
                  checked={communityOutings}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> ADLS Completed</Form.Label>
              <Form.Select
                onChange={(e) => setAdlsCompleted(e.target.value)}
                required
                value={adlsCompleted}
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>

            <SelectMaker
              label={"Meal Preparation"}
              setValue={setMealPreparation}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
            />
            <SelectMaker
              label={"Transportation"}
              setValue={setTransportation}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
            />
            <SelectMaker
              label={"Resident Redirected on behaviors"}
              setValue={setResidentRedirectedOnBehaviors}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
            />

            <Form.Group className="mb-3">
              <Form.Label>AWOL/Elopement</Form.Label>
              <Form.Select
                onChange={(e) => setAwolElopement(e.target.value)}
                required
                value={awolElopement}
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Note Summary</Form.Label>
              <Form.Control
                onChange={(e) => setNoteSummary(e.target.value)}
                required
                as={"textarea"}
                rows={3}
                placeholder="Enter  text"
                value={noteSummary}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control
                onChange={(e) => setBhtName(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
                value={bhtName}
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                onChange={(e) => setBhtSignature(e.target.value)}
                required
                value={bhtSignature}
              />
            </Form.Group>
            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div className="save-as-draft-btn w-100">
                <button
                  style={{
                    border: "1px solid #0C5C75",
                    color: "#0C5C75",
                    width: "100%",
                  }}
                >
                  SAVE AS DRAFT
                </button>
                <button
                  type="button"
                  style={{ backgroundColor: "#0C5C75", color: "white" }}
                >
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
                type="button"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EditProgressNote;
