import axios from 'axios';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
// import img from '../img/appointment-img.svg';

function Asnan() {
    const [error, setError] = useState("")
    const [doctors, setDoctors] = useState([])
    async function getDoctor() {
        let { data } = await axios.get("http://localhost:5000/asnan");
        setDoctors(data.data)
    };
    useEffect(() => {
        getDoctor();
    }, []);
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        
        const form = formRef.current;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    };


    // data
    const [patient, setPatient] = useState({
        name:"",
        phone:0,
        email:"",
        place:"",
        doctor:"",
        date:null
    });
    function getPatientData(e) {
        let myPatient = {...patient};
        myPatient[e.target.name]= e.target.value;
        setPatient(myPatient);
    };
    async function sub(e) {
        e.preventDefault();
        let {data}= await axios.post("http://localhost:5000/patient",patient);
        if (data.message === "success") {
            
        }else{
            setError(data.message)
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-3 ">
                    {Array.isArray(doctors) &&
                        doctors.map((doctor) => (
                            <div key={doctor.id}>
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <img src={doctor?.images} className="img-fluid rounded-circle mb-2 mx-2" style={{ width: '80px', height: '80px' }} alt="" />  {doctor?.name} {/* Accessing name from individual doctor */}
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p><i class="ri-user-3-fill"></i>{doctor.description}</p>
                                                <p> <i class="ri-map-pin-2-fill"></i>  {doctor.place}</p>
                                                <p><i class="ri-time-fill"></i>{doctor.time}</p>
                                                <p><i class="ri-money-pound-circle-fill"></i> {doctor.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
            </div>



            <hr />


            <div className="row">
                <div className="col-md-7">
                    <h1>Booking</h1>
                    {error.length >0 ? <div className="alert alert-danger">{error}</div>:""}
                    <form
                    action='POST'
                        className="row g-3 needs-validation"
                        noValidate
                        ref={formRef}
                        onSubmit={sub}
                    >
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">
                                Name
                            </label>
                            <input
                                onChange={getPatientData}
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                name='name'
                                defaultValue="Basmala"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">
                                Phone Number
                            </label>
                            <input
                            onChange={getPatientData}
                                type="tel"
                                className="form-control"
                                id="validationCustom02"
                                name='phone'
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustomUsername" className="form-label">
                                Email
                            </label>
                            <div className="input-group has-validation">
                                <input
                                onChange={getPatientData}
                                    type="email"
                                    className="form-control"
                                    id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend"
                                    name='email'
                                    required
                                />
                                <div className="invalid-feedback">Please enter email.</div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="validationCustom03" className="form-label">
                                Place
                            </label>
                            <input
                            onChange={getPatientData}
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                name='place'
                                required
                            />
                            <div className="invalid-feedback">Please provide a your place.</div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom04" className="form-label">
                                doctor
                            </label>
                            <select className="form-select" id="validationCustom04" name='doctor' required>
                                <option disabled value="">
                                    Choose...
                                </option>
                                <option>Dr. Hani Muhammad</option>
                                <option>Dr. Khaled Mansour</option>
                                <option>Dr. Hani Muhammad</option>
                                <option>Dr. Imad El-Din Faraj</option>
                                <option>Dr. Niqin Beshay</option>
                                <option>Dr.ali ahmed</option>
                                {/* Add state options here */}
                            </select>
                            <div className="invalid-feedback">Please select a doctor.</div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom05" className="form-label">
                                Booking date
                            </label>
                            <input
                            onChange={getPatientData}
                                type="date"
                                className="form-control"
                                id="validationCustom05"
                                name='date'
                                required
                            />
                            <div className="invalid-feedback">Please provide a Booking date.</div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                onChange={getPatientData}
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
                            <button onClick={handleSubmit} className="btn btn-success" type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-md-5">
                    <img src="https://raw.githubusercontent.com/wincodersujon/Hospital-website/c6c954ab074b68cf2b37490b556a2f6d33e23ea7/hospital/image/appointment-img.svg" alt="//" />

                </div>
            </div>
        </>
    )
}

export default Asnan;