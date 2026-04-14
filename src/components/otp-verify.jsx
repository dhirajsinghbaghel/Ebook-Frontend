import { RiGitRepositoryPrivateFill } from "@remixicon/react";
import { useState } from 'react';
import OtpInput from 'react-otp-input';

const otpPage=()=>{

    const [otp, setOtp] = useState('');
     const handleOtp=()=>{

        if(otp==""){
            alert("Please Enter Valid Otp")
        }else{
             alert(otp)
        }
    
       
     }

    return(
        
        <div className="w-full min-h-screen bg-amber-200 flex justify-center items-center">
            <div className= " p-3  flex items-center justify-center flex-col">
                <h1 className="  text-center bg-amber-300 rounded-2xl p-5 text-white"  >
                     < RiGitRepositoryPrivateFill  /> </h1>

                <h1 className="text-center text-3xl font-bold"> Enter OTP</h1>
                <div>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        inputType={"number"}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{ backgroundColor:"white",padding:"20px",width:"70px", margin:"20px",fontSize:"20px"}}
                    />
                </div>
                <div>
                    <button onClick={()=>handleOtp()} className="bg-amber-500 text-white w-[500px] h-[40px] rounded hover:cursor-pointer ">Verify</button>
                </div>
            </div>
        </div>
        
    )
}

export default otpPage;