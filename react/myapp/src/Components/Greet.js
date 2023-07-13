import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-5 mt-2 register-container text-center'>
      <h3>{props.name},</h3>
      <h3>Thank</h3>
      <h3>verfication sent to email {props.email}  </h3>
    </div>
  );
}
