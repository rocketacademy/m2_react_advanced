import { UserContext } from "../index.js";
import { useContext } from "react";

export default function Friends() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>
        Friends {user.email} - {user.uid}
      </h1>
      <ol>
        <li>Sam</li>
        <li>Foong</li>
      </ol>
    </div>
  );
}
