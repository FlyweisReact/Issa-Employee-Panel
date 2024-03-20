import React from 'react'
import { Container } from 'react-bootstrap'
import NavWrapper from '../../Helper/NavWrapper'
import HOC from '../../Layout/Inner/HOC'

const TherapyNote = () => {
  return (
   <>
    <NavWrapper title={"THERAPY NOTES"} isArrow={true}  />
    <Container>
        <div className="patient_chart_container">
          {TherapyNotesOptions?.map((i, index) => (
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>
      </Container>
   </>
    )
}

export default HOC(TherapyNote)