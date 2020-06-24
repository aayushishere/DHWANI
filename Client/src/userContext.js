import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const detail = {
    fullname: "Aayush Singh",
    email: "aayushsingh2203@dhwani.com",
    bio: "I like my music",
    image:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
  };

  const [user, setUser] = useState(detail);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
