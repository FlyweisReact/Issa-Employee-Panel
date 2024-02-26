/** @format */

import React from "react";
import { getData } from "../../../../../api/api";

const ViewStaff = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const fetchHandler = () => {
    getData(setDetails, `employee/getStaffingNoteById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <>
      <NavWrapper isArrow={true} title={"STAFFING NOTE"} />
    </>
  );
};

export default ViewStaff;
