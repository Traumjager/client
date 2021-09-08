import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./Personal";
import { Address } from "./Other";
import { Submit } from "./Submit";
import { useHistory } from "react-router";
const defaultData = {
  //step 1 Personal information
  role: "client",
  firstName: "",
  lastName:"",
  email: "",
  password: "123456",
  age:18,
  gender: "male",
  profile_pic:{},
  city: "Amman",
  address: "Jubeiha",
  phone_num:"0798254625",
};

const steps = [
  { id: "personal" },
  { id: "other" },
  { id: "verification" },
];

const BarberForm = () => {
  const history = useHistory();
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    
    steps,
    initialStep: 0,
  });
  const cancel=()=>{
    history.push("/");
  }
  const props = { formData, setForm, navigation,steps,cancel };

  switch (step.id) {
    case "personal":
      return <Names {...props} />;
    case "other":
      return <Address {...props} />;
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