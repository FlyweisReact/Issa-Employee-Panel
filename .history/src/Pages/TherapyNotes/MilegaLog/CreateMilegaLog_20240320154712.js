import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NavWrapper from '../../../Helper/NavWrapper'
import HOC from '../../../Layout/Inner/HOC'

const CreateMilegaLog = () => {
    const [ date ,setDate ] = useState("")
    const [ residentInitials , setResidentInitials  ] = useState("")
    const [ beginningMileage , setBeginningMileaga ] = useState("")
    const [endingMileage , setEndingMilega  ] = useState("")
    const [ totalMileage , setTotalMilega ] = useState("")
    const [driverSignature , setDriverSignature  ] = useState("")
    const [anyIssues , setAnyIssue  ] = useState("")
    const [ signedDate , setSignedDate   ] = useState("")
    const [ signedTime , setSignedTime ] = useState("")

  return (
    <>
        <NavWrapper title={"Milega Log"} isArrow={true} />

        <Container className="full-width-container">
        
        </Container>
    </>
  )
}

export default HOC(CreateMilegaLog)