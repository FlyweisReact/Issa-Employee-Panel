/** @format */
import {} from 'react'
import { Modal, Offcanvas } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { showMsg } from "../Baseurl";

export function OuterSidebar({ show, handleClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const nav = [
    {
      icon: <img src="/Dashboard/home.png" alt="fdn" />,
      link: "/dashboard/",
      name: "Home",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="fdn" />,
    },
    {
      icon: <img src="/book.svg" alt="" />,
      link: "/employee/patient-chart",
      name: "Menu",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard/icon.png" alt="fdn" />,
      link: "/employment/",
      name: "Employment Information",
      newIcon: <img src="/Dashboard/New folder/icon.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard/group.png" alt="fdn" />,
      link: "/assigned-patient/",
      name: "Assigned Patients",
      newIcon: <img src="/Dashboard/New folder/group.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard/user.png" alt="fdn" />,
      link: "/profile/",
      name: "Profile",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/tlist.png" alt="fdn" />,
      link: "/patient-list/",
      name: "Patient List",
      newIcon: <img src="/list.png" alt="fdn" />,
    },
  ];

  const logOut = () => {
    navigate("/");
    showMsg("", "Logged Out Successfully", "success");
  };

  const imgFetcher = (icon, icon2, link) => {
    if (location.pathname === link) {
      return <span className="image-wrapper">{icon}</span>;
    } else {
      return <span className="outline_wrapper">{icon2}</span>;
    }
  };
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="Outer_sider_canvas_container"
      >
        <Offcanvas.Body>
          <aside>
            <figure className="flex  flex-col items-center">
              <span
                style={{ fontSize: "2rem" }}
                className="font-bold text-white text-2xl"
              >
                Logo
              </span>
            </figure>

            <nav className="py-6">
              <ul>
                {nav.map((nav) => {
                  return (
                    <li>
                      <Link to={nav.link} key={nav.name}>
                        {imgFetcher(nav.newIcon, nav.icon, nav.link)}
                        <span className="title"> {nav.name} </span>
                      </Link>
                    </li>
                  );
                })}
                <li onClick={() => logOut()}>
                  <BiLogOutCircle className="log_out" />
                </li>
              </ul>
            </nav>
          </aside>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// Signature Modal
export const SignatureModal = (props) => {
  const [date,setDate]=useState("")
  const [time,setTime]=useState();
  const [signatureData,setSignatureData]=useState();
  


  useEffect(()=>{
    //set state
    setSignatureData(singin);

    // setDateAndTime(new Date())
    var currentDate = new Date();

// Extract date components
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();



// Display the extracted information
setDate(0${day}/0${month}/${year});

  },[])

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()});
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
 


  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="sing_modla"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="singature_modal">
          <h6> Digitally Sign by {props?.value} </h6>
          <h6> Date :  </h6>
          <input
            type="text"
            onChange={(e) => props.setValue(e.target.value)}
            value={props.value}
            placeholder="Enter your Lorem Ipsum"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export const UploadModal = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onHide();
    props?.handler();
  };
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="upload_box_modal">
          <form onSubmit={submitHandler}>
            <label>Resident Full Name</label>
            <select required onChange={(e) => props?.setValue(e.target.value)}>
              <option value="">Select </option>
              {props?.options?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.fullName}{" "}
                </option>
              ))}
              <option></option>
            </select>
            <button type="submit">UPLOAD MEDICATION</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
