import { UserContext } from "../index.js";
import { useContext } from "react";
export default function Profile() {
  const user = useContext(UserContext);
  return (
    <div className="App-header">
      <h1>Welcome {user.email}</h1>
    </div>
  );
}
