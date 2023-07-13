import React from 'react'
import Styled from "styled-components";

export default function Register(props) {
   /* const btnStyle = {
        backgroundColor: "green",
        color:"white",
    };*/
    let btnText,passBoxType;
    let btnClasses = ["btn","m-3"]
    if(props.showPass === true) {
        //btnStyle.backgroundColor = "red";
        btnText = "hide Password";
        passBoxType = "text";
        btnClasses.push("btn-danger");
    }
    else{
        btnText = "Show Password";
       passBoxType = "Password";
       btnClasses.push("btn-success");

    }
    const StyledButton = Styled.button`
  display:block;
  padding: 10px 5px;
  background-color:orange;
  border:none;
  color:white;
  width:100%;
  margin:5px;
`;
const StyleRegisterContainer = Styled.div`
width: 600px;
&:hover {
    box-shadow:0px 0px 5px grey;
}
@media (min-width:0px) and (max-width:600px){
    width: 300px;np
}

`;

    
  
 return (
    <StyleRegisterContainer className='container card p-5 mt-2 '>
        <h1  className='text-center'>Registion From</h1>
        <form  onSubmit={props.sumbit}>
            
            <div  className='form-group'>
                <label htmlFor="name">Neme</label>
                <input type="text" name='name' required className='form-control'/>
            </div>
            <div  className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"required className='form-control'/>
            </div>
            <div  className='form-group'>
                <label htmlFor="password">password</label>
                <input type={passBoxType} name="password"required className='form-control'/>
            </div>
            <button type='submit' className='btn btn.primary m-3'>Regisr</button>
            <button type='button'   className={btnClasses.join("")}   onClick={props.click} >
               {btnText}
               

            </button>
            <StyledButton type='button'> loing</StyledButton>
        </form>
      
    </StyleRegisterContainer>
  )
}
