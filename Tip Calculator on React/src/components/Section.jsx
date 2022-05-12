import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Section() {
  const [bill, setBill] = useState('');
  const [service, setService] = useState('');
  const [customer, setCustomer] = useState('');
  const [customerTip, setCustomerTip] = useState([null]);
  const [lists, setLists] = useState([]);
  const [customerQuantity, setCustomerQuantity] = useState([null]);
  const [sum, setSum] = useState(null);

  const getCustomer = () => {
    setCustomerQuantity(lists.length);
    setSum(
      customerTip.reduce((total, num) => {
        return total + num;
      })
    );

    console.log(sum);
  };

  const getList = () => {
    let tip = (bill * service) / 100;
    setCustomerTip([...customerTip, tip]);

    let count = customer;
    if (bill && service && customer) {
      setLists([...lists, { customers: count, tips: tip }]);
      setBill('');
      setService('');
      setCustomer('');
    }
  };

  const handleChange = (event) => {
    setBill(Number(event.target.value));
  };

  const selectChange = (val) => {
    setService(Number(val.target.value));
  };

  const chooseChange = (item) => {
    setCustomer(item.target.value);
  };
  return (
    <div>
      <h5>ENTER YOUR BILL AMOUNT</h5>
      <input type="number" onChange={handleChange} value={bill} /> <hr />
      <span> How was the service:</span> &nbsp;
      <span>
        <select name="" onChange={selectChange} value={service}>
          <option value=""> .....Choose Option....</option>

          <option value="20"> Excellent </option>
          <option value="15"> Very Good </option>
          <option value="10"> Good </option>
          <option value="5"> Poor </option>
        </select>{' '}
        &nbsp; &nbsp; &nbsp;
        <span> Enter the customer Name:</span> &nbsp;
        <input type="text" onChange={chooseChange} value={customer}></input>
        &nbsp;
        <Button
          type="button"
          onClick={getList}
          class="btn btn-primary"
          data-bs-toggle="button"
          autocomplete="off"
        >
          {' '}
          <b>ADD CUSTOMER </b>
        </Button>{' '}
        <hr />
        <h6>CUSTOMER LIST </h6>
        {lists.map((elem, index) => (
          <h6 key={index}>
            {elem.customers} has offered Rs.{elem.tips} Tip.
          </h6>
        ))}
      </span>
      <div class="d-grid gap-2">
        <Button class="btn btn-primary" onClick={getCustomer} type="button">
          <b>CLICK TO CALCULATE TOTAL CUSTOMER AND TIP VALUE</b>
        </Button>
      </div>{' '}
      <hr />
      <Table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NO.OF CUSTOMER</th>
            <th scope="col">TOTAL TIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">*</th>
            <td>{customerQuantity}</td>
            <td>{sum}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Section;
