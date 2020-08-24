import React, { useState } from "react";
import "./App.css";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import Thiredpage from "./components/Thiredpage";
import Fourthpage from "./components/Fourthpage";
import Buttons from "./Buttons.jsx";
import { Provider } from "./Context";

function App() {
  const [page, setPage] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [hobby, setHobby] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");

  const myData = {
    page: page,
    setPage: setPage,
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    email: email,
    setEmail: setEmail,
    hobby: hobby,
    setHobby: setHobby,
    address: address,
    setAddress: setAddress,
    bio: bio,
    setBio: setBio,
  };

  return (
    <div className="app">
      <Provider value={myData}>
        <div className="form">
          {page === 1 && <Firstpage />}
          {page === 2 && <Secondpage />}
          {page === 3 && <Thiredpage />}
          {page === 4 && <Fourthpage />}

          <Buttons />
        </div>
      </Provider>
    </div>
  );
}

export default App;
