import React from 'react';
// Remove unused import: MDBSelect
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio
} from 'mdb-react-ui-kit';

function RegistrationForm() {
  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='firstName' type='text' />
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='lastName' type='text' />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='age' type='number' />
              </MDBCol>
              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Gender:</h6>
                <MDBRadio name='gender' id='female' value='Female' label='Female' inline />
                <MDBRadio name='gender' id='male' value='Male' label='Male' inline />
                <MDBRadio name='gender' id='other' value='Other' label='Other' inline />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='College' size='lg' id='college' type='text' />
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Year' size='lg' id='year' type='number' />
              </MDBCol>
            </MDBRow>
            <MDBBtn className='mb-4' size='lg'>Next</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegistrationForm;