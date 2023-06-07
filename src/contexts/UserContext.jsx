import { createContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const updateCurrentUser = (newUser) => setUser(newUser);
  const removeUser = () => setUser(null);

  const value = { user, updateCurrentUser, removeUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
