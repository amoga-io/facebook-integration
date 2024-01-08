import React from "react";

const Contact = ({ item }) => {
  return (
    <div key={item.id} className="mt-4">
      <div className="flex gap-3 items-center">
        <img
          className="h-[34px] rounded-full"
          src={item.profilePhoto}
          alt="Mahaveer"
        />
        <h1 className="font-medium">{item.name}</h1>
      </div>
    </div>
  );
};

export default Contact;
