import React, { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";


const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(form);
  const btn = useMatches({
    xsm:'xs',
    sm:"sm",
    md:"md",
    lg:"lg"   
  })

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div
      className="px-16 md-mx:px-8 sm-mx:px-4 mx-10 my-20 lg-mx:mx-10 md-mx:mx-0 font-mono"
      id="contacts"
    >
      <h1 className="text-4xl text-center mb-10 font-bold sm-mx:text3xl xs-mx:text-xl text-white">
        Contact
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-[70%] lg-mx:w-full m-auto p-8 flex flex-col gap-6 border border-primaryColor rounded-3xl xs-mx:p-4"
      >
        <div className="text-3xl sm-mx:text-2xl xs-mx:text-xl flex gap-2  items-center text-white font-semibold">
          Let's Connect
          <IconTopologyStar3 className="text-primaryColor w-10 h-10 sm-mx:w-7 sm-mx:h-7" />
        </div>
        <FloatingInput
          id="name"
          name="Name"
          value={formData.name}
          handleChange={handleChange}
        />
        <FloatingInput
          id="email"
          name="Email"
          value={formData.email}
          handleChange={handleChange}
        />
        <FloatingInput
          id="phone"
          name="Phone Number"
          value={formData.phone}
          handleChange={handleChange}
        />
        <FloatingInput
          id="message"
          name="Message"
          value={formData.message}
          handleChange={handleChange}
        />
        <Button
          fullWidth
          rightSection={<IconArrowRight size={20} />}
          className="!text-bgColor !font-bold"
          variant="filled"
          size={btn}
          radius="lg"
          color="#64FFDA"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
