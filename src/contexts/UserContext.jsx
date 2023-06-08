import { createContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const updateCurrentUser = (newUser) => setCurrentUser(newUser);

  const value = { currentUser, updateCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
