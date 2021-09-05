import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./Personal";
import { Address } from "./Shop";
import { Contact } from "./Hours";
import { Submit } from "./Submit";
import { useHistory } from "react-router";

const defaultData = {
  //step 1 Personal information
  userName: "",
  email: "",
  password: "",
  age:18,
  gender: "male",
  profilePic:"",
  //step 2 Shop Information
  shopName:"" ,
  shopGender:"men",
  city: "",
  address: "",
  phoneNumber:"",
  //step 3 Working Hours
  startingHour:"08:30",
  endingHour:"17:30",
  holidays:['','','','','','',''],
  //step 4 Verification
  verificationToken:""
};

const steps = [
  { id: "personal" },
  { id: "shop" },
  { id: "hours" },
  { id: "verification" },
];

const BarberForm = () => {
  const history = useHistory();
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const cancel = () => {
   history.push("/");
  }
   const validateAll=(email="fake@fake.com",checkFields)=>{
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    
   if(!checkFields){
       return "Please fill all fields";
    }
     if(!validEmail){
      return "Please enter valid email";
    }
    if(checkFields&&validEmail){
      return ' ';
    }
    
  }
  const props = { formData, setForm, navigation,steps,cancel,validateAll };

  switch (step.id) {
    case "personal":
      return <Names {...props} />;
    case "shop":
      return <Address {...props} />;
    case "hours":
      return <Contact {...props} />;
    case "verification":
      return <Submit {...props} />;  
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};
export default BarberForm;