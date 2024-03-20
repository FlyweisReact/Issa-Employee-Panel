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

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <>
        <NavWrapper title={"Milega Log"} isArrow={true} />

        <Container className="full-width-container">
        <form onSubmit={submitHandler} className='w-100 text-start'>
            <div className='grid-cont'></div>
        </form>

        </Container>
    </>
  )
}

export default HOC(CreateMilegaLog)