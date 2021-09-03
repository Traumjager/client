import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./Names";
import { Address } from "./Address";
import { Contact } from "./Contact";
import { Review } from "./Review";
import { Submit } from "./Submit";
const defaultData = {
  userName: "",
  password: "",
  address: "",
  city: "",
  gender: "",
  age:0,
  shopGender:"",
  shopName:"" ,
  phoneNum:"",
  profilePic:"",
  workingHours:"" ,
  holidays:[],
  email: "",
  verificationToken:""
};

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

const ClientForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;  
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};
export default ClientForm;