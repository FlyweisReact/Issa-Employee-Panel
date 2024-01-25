/** @format */
import { Offcanvas } from "react-bootstrap";
import { RiCloseLine } from "react-icons/ri";
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
                        <span>
                            {nav.icon}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
