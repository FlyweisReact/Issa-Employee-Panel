/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DefaultInput } from "../../../Helper/Makers";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { downloadReport } from "../../../Repository/Apis";

export const TableRow = ({ heading, row, input }) => {
  return (
    <tr>
      <td> {heading} </td>
      {row?.map((i, index) => (
        <td key={index}>
          <div className="Radio_btns">
            <div className="btns">
              <DefaultInput isBots={false} value={i?.value ? "Yes" : "No"} />
            </div>
          </div>
        </td>
      ))}
      <td>
        <DefaultInput isBots={false} value={input} />
      </td>
    </tr>
  );
};

const ViewDTF = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const fetchDetails = () => {
    getData(setDetail, `employee/getADLTrackingFormById/${id}`);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const KeyPair = [
    {
      heading: "Selecting Clothes",
      row: [
        {
          value: detail?.data?.selectingClothes?.requiresNoAssistance,
        },
        {
          value: detail?.data?.selectingClothes?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.selectingClothes?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.selectingClothes?.notApplicable,
        },
        {
          value: detail?.data?.selectingClothes?.refused,
        },
      ],
      input: detail?.data?.selectingClothes?.staffInitials,
    },
    {
      heading: "Bathing or Showering",
      row: [
        {
          value: detail?.data?.bathingOrShowering?.requiresNoAssistance,
        },
        {
          value: detail?.data?.bathingOrShowering?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.bathingOrShowering?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.bathingOrShowering?.notApplicable,
        },
        {
          value: detail?.data?.bathingOrShowering?.refused,
        },
      ],
      input: detail?.data?.bathingOrShowering?.staffInitials,
    },
    {
      heading: "Combing Hair",
      row: [
        {
          value: detail?.data?.combingHair?.requiresNoAssistance,
        },
        {
          value: detail?.data?.combingHair?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.combingHair?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.combingHair?.notApplicable,
        },
        {
          value: detail?.data?.combingHair?.refused,
        },
      ],
      input: detail?.data?.combingHair?.staffInitials,
    },
    {
      heading: "Applying Lotion",
      row: [
        {
          value: detail?.data?.applyingLotion?.requiresNoAssistance,
        },
        {
          value: detail?.data?.applyingLotion?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.applyingLotion?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.applyingLotion?.notApplicable,
        },
        {
          value: detail?.data?.applyingLotion?.refused,
        },
      ],
      input: detail?.data?.applyingLotion?.staffInitials,
    },
    {
      heading: "Laundry",
      row: [
        {
          value: detail?.data?.laundry?.requiresNoAssistance,
        },
        {
          value: detail?.data?.laundry?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.laundry?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.laundry?.notApplicable,
        },
        {
          value: detail?.data?.laundry?.refused,
        },
      ],
      input: detail?.data?.laundry?.staffInitials,
    },
    {
      heading: "Dressing",
      row: [
        {
          value: detail?.data?.dressing?.requiresNoAssistance,
        },
        {
          value: detail?.data?.dressing?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.dressing?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.dressing?.notApplicable,
        },
        {
          value: detail?.data?.dressing?.refused,
        },
      ],
      input: detail?.data?.dressing?.staffInitials,
    },
    {
      heading: "Shampooing Hair",
      row: [
        {
          value: detail?.data?.shampooingHair?.requiresNoAssistance,
        },
        {
          value: detail?.data?.shampooingHair?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.shampooingHair?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.shampooingHair?.notApplicable,
        },
        {
          value: detail?.data?.shampooingHair?.refused,
        },
      ],
      input: detail?.data?.shampooingHair?.staffInitials,
    },
    {
      heading: "Oral Care Evening",
      row: [
        {
          value: detail?.data?.oralCareEvening?.requiresNoAssistance,
        },
        {
          value: detail?.data?.oralCareEvening?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareEvening?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareEvening?.notApplicable,
        },
        {
          value: detail?.data?.oralCareEvening?.refused,
        },
      ],
      input: detail?.data?.oralCareEvening?.staffInitials,
    },
    {
      heading: "Oral Care Morning",
      row: [
        {
          value: detail?.data?.oralCareMorning?.requiresNoAssistance,
        },
        {
          value: detail?.data?.oralCareMorning?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareMorning?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareMorning?.notApplicable,
        },
        {
          value: detail?.data?.oralCareMorning?.refused,
        },
      ],
      input: detail?.data?.oralCareMorning?.staffInitials,
    },
    {
      heading: "Breakfast",
      row: [
        {
          value: detail?.data?.breakfast?.requiresNoAssistance,
        },
        {
          value: detail?.data?.breakfast?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.breakfast?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.breakfast?.notApplicable,
        },
        {
          value: detail?.data?.breakfast?.refused,
        },
      ],
      input: detail?.data?.breakfast?.staffInitials,
    },
    {
      heading: "Lunch",
      row: [
        {
          value: detail?.data?.lunch?.requiresNoAssistance,
        },
        {
          value: detail?.data?.lunch?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.lunch?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.lunch?.notApplicable,
        },
        {
          value: detail?.data?.lunch?.refused,
        },
      ],
      input: detail?.data?.lunch?.staffInitials,
    },
    {
      heading: "Dinner",
      row: [
        {
          value: detail?.data?.dinner?.requiresNoAssistance,
        },
        {
          value: detail?.data?.dinner?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.dinner?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.dinner?.notApplicable,
        },
        {
          value: detail?.data?.dinner?.refused,
        },
      ],
      input: detail?.data?.dinner?.staffInitials,
    },
    {
      heading: "AM Snack",
      row: [
        {
          value: detail?.data?.amSnacks?.requiresNoAssistance,
        },
        {
          value: detail?.data?.amSnacks?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.amSnacks?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.amSnacks?.notApplicable,
        },
        {
          value: detail?.data?.amSnacks?.refused,
        },
      ],
      input: detail?.data?.amSnacks?.staffInitials,
    },
    {
      heading: "PM Snack",
      row: [
        {
          value: detail?.data?.pmSnack?.requiresNoAssistance,
        },
        {
          value: detail?.data?.pmSnack?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.pmSnack?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.pmSnack?.notApplicable,
        },
        {
          value: detail?.data?.pmSnack?.refused,
        },
      ],
      input: detail?.data?.pmSnack?.staffInitials,
    },
    {
      heading: "AM Bowel Movement",
      row: [
        {
          value: detail?.data?.amBowelMovement?.requiresNoAssistance,
        },
        {
          value: detail?.data?.amBowelMovement?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.amBowelMovement?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.amBowelMovement?.notApplicable,
        },
        {
          value: detail?.data?.amBowelMovement?.refused,
        },
      ],
      input: detail?.data?.amBowelMovement?.staffInitials,
    },
    {
      heading: "PM Bowel Movement",
      row: [
        {
          value: detail?.data?.pmBowelMovement?.requiresNoAssistance,
        },
        {
          value: detail?.data?.pmBowelMovement?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.pmBowelMovement?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.pmBowelMovement?.notApplicable,
        },
        {
          value: detail?.data?.pmBowelMovement?.refused,
        },
      ],
      input: detail?.data?.pmBowelMovement?.staffInitials,
    },

    {
      heading: "Overnight Bowel Movement",
      row: [
        {
          value: detail?.data?.overnightBowelMovement?.requiresNoAssistance,
        },
        {
          value: detail?.data?.overnightBowelMovement?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.overnightBowelMovement?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.overnightBowelMovement?.notApplicable,
        },
        {
          value: detail?.data?.overnightBowelMovement?.refused,
        },
      ],
      input: detail?.data?.overnightBowelMovement?.staffInitials,
    },
    {
      heading: "Hand & Foot nail care",
      row: [
        {
          value: detail?.data?.handAndFootNailCare?.requiresNoAssistance,
        },
        {
          value: detail?.data?.handAndFootNailCare?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.handAndFootNailCare?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.handAndFootNailCare?.notApplicable,
        },
        {
          value: detail?.data?.handAndFootNailCare?.refused,
        },
      ],
      input: detail?.data?.handAndFootNailCare?.staffInitials,
    },
    {
      heading: "Bed Mobility",
      row: [
        {
          value: detail?.data?.bedMobility?.requiresNoAssistance,
        },
        {
          value: detail?.data?.bedMobility?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.bedMobility?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.bedMobility?.notApplicable,
        },
        {
          value: detail?.data?.bedMobility?.refused,
        },
      ],
      input: detail?.data?.bedMobility?.staffInitials,
    },
  ];

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };


  return (
    <>
      <NavWrapper
        title={"Activities of Daily Living Tracking Form"}
        isArrow={true}
      />
      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div className="overflow-table">
            <table className="bold-table">
              <thead>
                <tr>
                  <th>ADLS</th>
                  <th>Requires No  Assistance</th>
                  <th>Some  Assistance  Needed</th>
                  <th>Complete  Assistance  Needed</th>
                  <th>Not  Applicable</th>
                  <th>Refused</th>
                  <th>Staff Initials</th>
                </tr>
              </thead>
              <tbody>
                {KeyPair?.map((item, index) => (
                  <TableRow
                    heading={item?.heading}
                    row={item?.row}
                    input={item?.input}
                    setInput={item?.setInput}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <p className="fw-bold text-desc mt-3">
            Staff members are to initial once ADLs is completed on each shift.
          </p>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewDTF);
