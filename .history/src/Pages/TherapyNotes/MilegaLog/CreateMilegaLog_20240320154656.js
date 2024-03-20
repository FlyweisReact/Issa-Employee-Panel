import React, { useState } from 'react'
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
    </>
  )
}

export default HOC(CreateMilegaLog)