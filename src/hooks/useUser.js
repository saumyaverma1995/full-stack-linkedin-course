import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const [user, setUSer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUSer(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);
  return {
    user,
    isLoading,
  };
};

export default useUser;
