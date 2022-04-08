import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

import "./Checkout.css";
function OrderSuccess() {
  return (
    <div><Result
    status="success"
    title="Successfully Order Placed!"
    subTitle="please wait for your delivery within few days"
    extra={[
      
      <Link to="/shop" className='buyAgain'>Buy Again</Link>,
    ]}
  />,</div>
  )
}

export default OrderSuccess