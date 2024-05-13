import React, { useRef } from 'react'

function General() {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
      const form = formRef.current;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
      form.classList.add('was-validated');
  };
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3>General Dentistry</h3>
                <p>Maintaining oral and dental health. The general dentist is the primary reference for dental care and provides comprehensive
                     services to maintain oral health and prevent oral diseases </p>
                     <p> 
                     General dental services include routine oral and dental examination, teeth cleaning, tooth decay treatment,
                      dental fillings, and periodontal treatment.</p>
             </div>

             <div className="col-md-6">
                <img src="https://img.freepik.com/free-vector/patient-sitting-medical-chair-during-visit-treatment-isolated-flat-vector-illustration-cartoon-dentist-working-diagnostic-cabinet-stomatology-dental-clinic-concept_74855-13192.jpg?w=1380&t=st=1704236540~exp=1704237140~hmac=f66ac47238168a1109809bcdbfcf55515fcc35707c828143d2a228ab0b3e3ab3" alt=""  className='w-75'/>
             </div>

        </div>

        <div className="row">
                    <div className="col-md-7">
                        <h1>Booking</h1>
                        <form
                            className="row g-3 needs-validation"
                            noValidate
                            ref={formRef}
                            onSubmit={handleSubmit}
                        >
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom01"
                                    defaultValue="Mark"
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom02" className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="validationCustom02"
                                    defaultValue="Otto"
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="validationCustomUsername" className="form-label">
                                    Email
                                </label>
                                <div className="input-group has-validation">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="validationCustomUsername"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <div className="invalid-feedback">Please enter valid email.</div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="validationCustom03" className="form-label">
                                    Place
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom03"
                                    required
                                />
                                <div className="invalid-feedback">Please provide a your place.</div>
                            </div>
                            
                            <div className="col-md-4">
                                <label htmlFor="validationCustom05" className="form-label">
                                    Booking date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="validationCustom05"
                                    required
                                />
                                <div className="invalid-feedback">Please provide a Booking date.</div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="invalidCheck"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Booking confirmation
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-success" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-5">
                        <img src="https://raw.githubusercontent.com/wincodersujon/Hospital-website/c6c954ab074b68cf2b37490b556a2f6d33e23ea7/hospital/image/appointment-img.svg" alt="//" />

                    </div>
                </div>
    </div>
    </>
   )
}

export default General