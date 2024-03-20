import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  DateFormatter,
  MultiSelect,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ViewAuthorization = () => {
    const [data, setData] = useState([]);
    const [patientId, setPatientId] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [authorizedPersonName, setAuthorizedPersonName] = useState("");
    const [authorizedPersonAgency, setAuthorizedPersonAgency] = useState("");
    const [authorizedPersonAddress, setAuthorizedPersonAddress] = useState("");
    const [authorizedPersonPhone, setAuthorizedPersonPhone] = useState("");
    const [authorizedPersonFax, setAuthorizedPersonFax] = useState("");
    const [authorizedPersonEmail, setAuthorizedPersonEmail] = useState("");
    const [dropDown, setDropDown] = useState([]);
    const [purposeOfDisclosure, setPurposeOfDisclosure] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [expirationFrom, setExpirationFrom] = useState("");
    const [expirationTo, setExpirationTo] = useState("");
    const [revocation, setRevocation] = useState("");
    const [specify, setSpecify] = useState("");
    const [signature, setSignature] = useState("");
    const [dateSigned, setDateSigned] = useState("");
    const [relationshipToPerson, setRelationshipToPerson] = useState("");
    const [witness, setWitness] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [timeSigned, setTimeSigned] = useState("");
    const [offerLetter, setOfferLetter] = useState({});
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [ residentName , setResidentName ] = useState("")
  
    const payload = {
      patientId,
      residentName,
      dateOfBirth,
      authorizedPersonAddress,
      authorizedPersonAgency,
      authorizedPersonName,
      authorizedPersonPhone,
      authorizedPersonFax,
      authorizedPersonEmail,
      dropDown: dropDown?.map((i) => i.value),
      purposeOfDisclosure,
      companyName,
      expirationFrom,
      expirationTo,
      revocation,
      specify,
      signature,
      dateSigned,
      relationshipToPerson,
      witness,
      signedTime: timeSigned,
    };
  
    const getAllPatents = () => {
      getData(setData, `employee/getPatient`);
    };
    useEffect(() => {
      getAllPatents();
    }, []);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      editApi(
        setLoading,
        `employee/editAuthorizationForReleaseOfInformationById/${id}`,
        payload
      );
    };
  
    const selectHandler = (e) => {
      const obj = JSON.parse(e);
      setPatientId(obj?._id);
      setResidentName(obj?.fullName);
    };
  
    const dropdownOptions = [
      {
        label: "Mental Health",
        value: "Mental Health",
      },
      {
        label: "Substance abuse",
        value: "Substance abuse",
      },
      {
        label: "Medical information",
        value: "Medical information",
      },
      {
        label: "Pharmacy",
        value: "Pharmacy",
      },
      {
        label: "Current medication",
        value: "Current medication",
      },
      {
        label: "Psychotherapy notes",
        value: "Psychotherapy notes",
      },
      {
        label: "Progress notes",
        value: "Progress notes",
      },
      {
        label: "Immunization records",
        value: "Immunization records",
      },
    ];
  
    useEffect(() => {
      getData(setOfferLetter, "employee/getMyOfferLetter");
    }, []);
  
    useEffect(() => {
      if (offerLetter) {
        setCompanyName(offerLetter?.data?.companyName);
      }
    }, [offerLetter]);
  
    const fetchHandler = () => {
      getData(
        setDetail,
        `employee/getAuthorizationForReleaseOfInformationById/${id}`
      );
    };
  
    useEffect(() => {
      fetchHandler();
    }, []);
  
    useEffect(() => {
      if (detail) {
        const item = detail?.data;
        setPatientId(item?.patientId);
        setResidentName(item?.residentName);
        setDateOfBirth(item?.dateOfBirth);
        setAuthorizedPersonName(item?.authorizedPersonName);
        setAuthorizedPersonAgency(item?.authorizedPersonAgency);
        setAuthorizedPersonAddress(item?.authorizedPersonAddress);
        setAuthorizedPersonPhone(item?.authorizedPersonPhone);
        setAuthorizedPersonFax(item?.authorizedPersonFax);
        setAuthorizedPersonEmail(item?.authorizedPersonEmail);
        setCompanyName(item?.companyName);
        setRevocation(item?.revocation);
        setExpirationTo(item?.expirationTo);
        setSpecify(item?.specify);
        setSignature(item?.signature);
        setDateSigned(item?.dateSigned);
        setRelationshipToPerson(item?.relationshipToPerson);
        setWitness(item?.witness);
        if (item?.dropDown) {
          const uniqueMoods = new Set([...dropDown, ...item?.dropDown]);
          const uniqueMoodArray = Array.from(uniqueMoods)?.map((moodItem) => ({
            value: moodItem,
            label: moodItem,
          }));
          setDropDown(uniqueMoodArray);
        }
        setPurposeOfDisclosure(item?.purposeOfDisclosure);
        setTimeSigned(item?.signedTime);
        setDateSigned(item?.dateSigned);
      }
    }, [detail]);


    useEffect(() => {
        if(data && detail){
            const filtered =  data?.data?.filter((i) => i._id === detail?.data?.patientId)
            console.log(filtered?.[0])
        }
    },[data , detail])



   
  
    return (
      <>
     
        <NavWrapper
          title={"AUTHORIZATION FOR RELEASE OF INFORMATION"}
          isArrow={true}
        />
  
        <Container className="full-width-container">
          <form className="w-100 text-start" onSubmit={submitHandler}>
            <div className="grid-container">
              <div className="grid-item long-input">
                <label>Resident’s Name:</label>
                <select
                  className="borderlessSelect"
                  onChange={(e) => selectHandler(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  {data?.data?.map((patient) => (
                    <option key={patient._id} value={JSON.stringify(patient)}>
                      {patient.fullName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid-item" />
              <div className="grid-item">
                <label>Date of Birth :</label>
                <BorderlessInput
                  setState={setDateOfBirth}
                  value={DateFormatter(dateOfBirth)}
                  type="date"
                />
              </div>
              <div className="grid-item full-wid-input">
                <div className="mixed_input">
                  <label>Authorize</label>
                  <span>
                    <BorderlessInput
                      setState={setAuthorizedPersonName}
                      value={authorizedPersonName}
                      type="text"
                    />
                  </span>
                  <label> to release the information described below to:</label>{" "}
                </div>
              </div>
              <div className="grid-item full-wid-input">
                <label>Person and Agency (recipient)</label>
              </div>
              <div className="grid-item full-wid-input">
                <label>Address:</label>
                <BorderlessInput
                  setState={setAuthorizedPersonAddress}
                  value={authorizedPersonAddress}
                  type="text"
                />
              </div>
              <div className="grid-item">
                <label>Phone:</label>
                <BorderlessInput
                  setState={setAuthorizedPersonPhone}
                  value={authorizedPersonPhone}
                  type="number"
                />
              </div>
  
              <div className="grid-item">
                <label>Fax:</label>
                <BorderlessInput
                  setState={setAuthorizedPersonFax}
                  value={authorizedPersonFax}
                  type="text"
                />
              </div>
  
              <div className="grid-item">
                <label>Email:</label>
                <BorderlessInput
                  setState={setAuthorizedPersonEmail}
                  value={authorizedPersonEmail}
                  type="email"
                />
              </div>
              <div className="grid-item">
                <label> Agency Name:</label>
                <BorderlessInput
                  setState={setAuthorizedPersonAgency}
                  value={authorizedPersonAgency}
                  type="text"
                />
              </div>
  
              <div className="grid-item full-wid-input">
                <label>
                  Notice to Recipient: This information has been disclosed to you
                  from records that Federal law protects. These records are not
                  subject to re disclosure. Federal regulations (42 CFR Part 2)
                  prohibit you from making further disclosure of Substance Abuse
                  Information without this specific written consent of the person
                  to whom it pertains, or as otherwise permitted by such
                  regulations. A general authorization for the release of medical
                  or other information is not sufficient for this purpose.
                </label>
              </div>
  
              <div className="grid-item full-wid-input d-block">
                <label>
                  I authorize to release the following Information below:
                </label>
                <MultiSelect
                  setValue={setDropDown}
                  value={dropDown}
                  options={dropdownOptions}
                />
              </div>
  
              <div className="grid-item full-wid-input">
                <label>Purpose of Disclosure:</label>
                <BorderlessInput
                  setState={setPurposeOfDisclosure}
                  value={purposeOfDisclosure}
                  type="text"
                />
              </div>
  
              <div className="grid-item full-wid-input">
                <label>
                  I understand that at anytime, I may revoke this authorization by
                  writing to {companyName} .This revocation will be effective
                  except to the extent that action based on this authorization has
                  already been taken. <br />
                  This authorization for release of information will expire:
                </label>
              </div>
  
              <div className="grid-item">
                <BorderlessInput
                  setState={setExpirationTo}
                  value={DateFormatter(expirationTo)}
                  type="date"
                />
                <label>One year from date</label>
              </div>
              <div className="grid-item long-input">
                <BorderlessInput
                  setState={setRevocation}
                  value={DateFormatter(revocation)}
                  type="date"
                />
                <label>60 Days (Substance Abuse Services)</label>
              </div>
              <div className="grid-item">
                <BorderlessInput
                  setState={setExpirationFrom}
                  value={DateFormatter(expirationFrom)}
                  type="date"
                />
              </div>
              <div className="grid-item full-wid-input">
                <label>Other (specify)</label>
                <BorderlessInput
                  setState={setSpecify}
                  value={specify}
                  type="text"
                />
              </div>
  
              <div className="full-wid-input geid-item">
                <label>
                  By signing below, I acknowledge that I have read and understand
                  this document. I have given authorization to my provider to
                  disclose my records. I understand that my information being
                  disclosed to the receiving agency may no longer be protected
                  under the terms of this agreement.
                </label>
              </div>
  
              <div className="grid-item  full-wid-input d-block">
                <div className="custome-cloud-btn">
                  <div className="btns">
                    <button className="draft"> SAVE AS DRAFT</button>
                    <button
                      type="button"
                      className="signed"
                      onClick={() => setOpen(true)}
                    >
                      SAVED AND SIGNED
                    </button>
                  </div>
                  <div>
                    {signature && (
                      <p>
                        Digitally Sign by {signature}{" "}
                        {dateSigned && DateInMMDDYY(dateSigned)} {timeSigned}{" "}
                      </p>
                    )}
                  </div>
                </div>
              </div>
  
              <div className="grid-item long-input">
                <label>Relationship to Person</label>
                <BorderlessInput
                  setState={setRelationshipToPerson}
                  value={relationshipToPerson}
                  type="text"
                />
              </div>
              <div className="grid-item long-input">
                <label>Witness</label>
                <BorderlessInput
                  setState={setWitness}
                  value={witness}
                  type="text"
                />
              </div>
            </div>
  
            <button className="employee_create_btn">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </form>
        </Container>
      </>
    );
  };

export default HOC(ViewAuthorization)