import React from 'react'
import NavWrapper from '../../Helper/NavWrapper'
import HOC from '../../Layout/Inner/HOC'

const TherapyNote = () => {
  return (
   <>
    <NavWrapper title={"THERAPY NOTES"} isArrow={true}  />
   </>
    )
}

export default HOC(TherapyNote)