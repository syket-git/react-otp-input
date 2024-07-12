import { useState } from "react";
import OtpInput from "./components/OtpInput";

const App = () => {
  const [otp, setOtp] = useState("");

  const handleChangeOtp = (newOtp) => {
    setOtp(newOtp);
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-5">Enter OTP</h1>
      <OtpInput length={6} onChangeOtp={handleChangeOtp} />
      <p className="text-3xl font-bold mt-5">OTP Entered: {otp}</p>
    </div>
  );
};

export default App;
