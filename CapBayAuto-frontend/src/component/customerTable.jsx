import axios from 'axios';
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CustomerTable = () => {
    const [customers, setCustomers] = useState([]);
    const [id, setId] = useState('');
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [purchaseStatus, setPurchaseStatus] = useState(false);
    const [downpayment, setDownpayment] = useState(0);
    const [price, setPrice] = useState(200000);
    const [loanAmount, setLoanAmount] = useState(0);
    const [discount, setDiscount] = useState(false);
    const [firstTenCustomers, setFirstTenCustomers] = useState([]);
    const [Update, setUpdate] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        (async () => await Load())();
    }, []);
    async function  Load()
    {
       const result = await axios.get(
           "http://127.0.0.1:8000/api/customer");
           setCustomers(result.data);
           console.log(result.data);

           // Count number of customers who have paid down payment
           const paidCustomers = response.data.filter(customer => customer.purchase_status === 2);
           setPaidCustomersCount(paidCustomers.length);

           // Get the first 10 customers
           const firstTen = response.data.slice(0, 10);
           setFirstTenCustomers(firstTen);
    }

    async function editStudent(customers)
         {
            const index = firstTenCustomers.findIndex(c => c.id === customers.id);
            // setPurchaseStatus(customers.purchaseStatus);
            // setDownpayment(customers.downpayment);
            // setLoanAmount(customers.loanAmount); 
            percent=customers.downpayment/customers.price;
            if(percent>=0.1 && index !== -1)
                setDiscount(1);
            setId(students.id);
            handleClose();
            // {update}
            
         }

    async function DeleteStudent(id)
         {
             
              await axios.delete("http://127.0.0.1:8000/api/customer/" + id); 
              alert("Student deleted Successfully");
              Load();
                
         }

         async function update(event) {
            try {
                await axios.put(`http://127.0.0.1:8000/api/customer/${id}`, {
                    firstName: firstname,
                    lastName: lastname,
                    telno: phone,
                    emailAdd: address,
                    branch: branch,
                    date_and_time: dateTime,
                    purchase_status: purchaseStatus,
                    downpaymentAmount: downpayment,
                    modelPrice: price,
                    loanAmount: loanAmount,
                    discount: discount
                });
                alert("Detailed Updated");
                setId("");
                setFirstName("");
                setLastName("");
                setAddress("");
                setPhone("");
                setBranch("");
                setDateTime("");
                setPurchaseStatus(0);
                setDownpayment(0);
                setPrice(200000);
                setLoanAmount(0);
                setDiscount(false);
                setShow(false); // Close the modal after updating
                Load(); // Reload data
            } catch (err) {
                alert("Update Failed");
            }
        }

        return (
            <div>
                <br />
                <table className="table table-dark" align="center">
                    <thead>
                        <tr>
                            <th scope="col">Customer Id</th>
                            <th scope="col">Customer First Name</th>
                            <th scope="col">Customer Last Name</th>
                            <th scope="col">Customer Phone</th>
                            <th scope="col">Customer Address</th>
                            <th scope="col">Nearest Branch</th>
                            <th scope="col">Appointment Date and Time</th>
                            <th scope="col">Payment Status</th>
                            <th scope="col">Down Payment Amount</th>
                            <th scope="col">Loan Amount</th>
                            <th scope="col">Discount Eligible</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr key={customer.id}>
                                <th scope="row">{customer.id}</th>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.telno}</td>
                                <td>{customer.emailAdd}</td>
                                <td>{customer.branch}</td>
                                <td>{customer.date_and_time}</td>
                                <td>
                                    {(() => {
                                        switch (customer.purchase_status) {
                                            case 0:
                                                return 'Test Drive';
                                            case 1:
                                                return 'Booked';
                                            case 2:
                                                return 'Payment Completed';
                                            case 3:
                                                return 'No Buy';
                                            default:
                                                return 'Unknown';
                                        }
                                    })()}
                                </td>
                                <td>{customer.downpaymentAmount}</td>
                                <td>{customer.loanAmount}</td>
                                <td>{customer.discountElligible ? 'Yes' : 'No'}</td>
                                <td>
                                <button type="button" class="btn btn-primary" onClick={handleShow}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId={`exampleForm.ControlInput${customers.id}`}>
                <Form.Label>Payment Status:</Form.Label>
                <Form.Control as="select" value={purchaseStatus} onChange={(event) => setPurchaseStatus(event.target.value)}>
                <option value={0}>Test Drive</option>
                <option value={1}>Booked/ Payed Down Payment</option>
                <option value={2}>Payment Completed</option>
                <option value={3}>No Buy</option>
                </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Down Payment Amount: </Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Down Payment AMount"
                    autoFocus
                    value={downpayment}
                    onChange={(e) => setDownpayment(e.target.value)}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Loan Amount: </Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Loan Amount"
                    autoFocus
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={update}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
               
            </div>
        );
}

export default CustomerTable;