import axios from 'axios';
import  {useEffect, useState } from "react";

const Form = () => {

    const [id, setId] = useState('');
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [purchaseStatus, setpurchaseStatus] = useState(false);
    const [downpayment, setdownpayment] = useState(0);
    const [price, setPrice] = useState(200000);
    const [loanAmount, setloanAmount] = useState(0);
    const [discount, setDiscount] = useState(false);
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        (async () => await Load())();
        }, []);
        async function  Load()
        {
           const result = await axios.get(
               "http://127.0.0.1:8000/api/customer");
               setStudents(result.data);
               console.log(result.data);
        }
       
          
           async function save(event)
          {
              event.preventDefault();
          try
              {
               await axios.post("http://127.0.0.1:8000/api/customer",
              {
              
                firstName: firstname,
                lastName: lastname,
                telno: phone,
                emailAdd: address,
                branch:branch,
                date_and_time:dateTime,
                purchase_status:purchaseStatus,
                downpaymentAmount:downpayment,
                modelPrice:price,
                loanAmount:loanAmount,
                discount:discount
              
              });
                alert("Test Drive Registation Successfully");
                // setId("");
                // setName("");
                // setAddress("");
                // setPhone("");
                // setBranch("");
                // setDateTime("");
                // setpurchaseStatus("");
                // Load();
              
              }
          catch(err)
              {
                alert("Test Drive Registation Failed");
              }
         }
         

    return (
        <div className="row justify-content-md-center">
            <h1>Test Drive Form</h1>
            <form className="form-inline">
            <div class="form-group">
               <input  type="text" class="form-control" id="student_id" hidden
               value={id}
               onChange={(event) =>
                {
                  setId(event.target.value);      
                }}
               
               />
            </div>
            <div className="form-group">
                    <label>First Name :</label>
                    <input type="text" className="form-control" placeholder="First Name" 
                    value={firstname}
                     onChange={(event) =>
                        {
                            setFirstName(event.target.value);      
                        }}/>
            </div>
            <div className="form-group">
                    <label>Last Name :</label>
                    <input type="text" className="form-control" placeholder="Last Name" 
                    value={lastname}
                     onChange={(event) =>
                        {
                            setLastName(event.target.value);      
                        }}/>
            </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                    value={address}
                    onChange={(event) =>
                      {
                        setAddress(event.target.value);      
                      }}/>
                </div>
                <div className="form-group">
                    <label for="phone">Phone number:</label>
                    <input type="tel" className="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="phone number"
                    value={phone}
                    onChange={(event) =>
                      {
                        setPhone(event.target.value);      
                      }}
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Nearest Branch:</label>
                    <select className="form-control" id="exampleFormControlSelect1"
                    value={branch}
                    onChange={(event) =>
                      {
                        setBranch(event.target.value);      
                      }}
                    >
                        <option>Please Select</option>
                        <option>Taman A</option>
                        <option>Taman B</option>
                        <option>Taman C</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="appointment">Appointment Date & Time:</label>
                    <input type="datetime-local" className="form-control" id="apointment" placeholder="phone number"
                    value={dateTime}
                    onChange={(event) =>
                      {
                        setDateTime(event.target.value);      
                      }} />
                </div>
                
            </form>

            <button className="btn btn-primary" onClick={save}>Submit</button>
        </div>
    );
}


export default Form;