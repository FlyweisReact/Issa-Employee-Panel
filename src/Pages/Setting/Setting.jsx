/** @format */

import { Container } from "react-bootstrap";
import { MdArrowBackIos } from "react-icons/md";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Inner/HOC";

const Setting = () => {
  return (
    <>
      <NavWrapper title={"SETTINGS"} />
      <Container>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            alignItems: "center",
            padding: ".1rem",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              textAlign: "left",
              padding: ".5rem",
            }}
          >
            <div>
              <img
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "70px",
                  maxHeight: "60px",
                }}
                src="/Dashboard2/Setting/setting.png"
                alt="setting"
              />
            </div>
            <div style={{ lineHeight: ".5rem" }}>
              <p style={{ fontWeight: "bold" }}>Preferences</p>
              <p style={{ opacity: "60%" }}>Manage your Preferences</p>
            </div>
          </div>
          <div>
            <MdArrowBackIos style={{ fontSize: "1.8rem" }} />
          </div>
        </div>
     </Container>
    </>
  );
};

export default HOC(Setting);
