import { useState } from "react";

const VerifyEmail = () => {
  return (
    <div> 
      <div>
        <form>
          <div>
            <label>Enter your Otp code:</label> 
            <input type="text"
              name="otp"
            /> 
          </div>
          <input type="submit" value="Send"/>
        </form>  
      </div>  
    </div>
  )
}

export default VerifyEmail