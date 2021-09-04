import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./Personal";
import { Address } from "./Shop";
import { Contact } from "./Hours";
import { Submit } from "./Submit";
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
  shopGender:"",
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
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation,steps };

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