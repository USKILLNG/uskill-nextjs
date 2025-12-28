"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// 1. Create the Context
const AuthContext = createContext({});

// 2. EXPORT THE CUSTOM HOOK
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // We add a loading state to prevent the "Login" button from flashing before we check localStorage
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 3. Load user from LocalStorage on mount (The Persistence Fix)
  useEffect(() => {
    // Check if we have a saved user in the browser
    const storedUser = localStorage.getItem("uskill_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 4. Login Function
  const login = async () => {
    setLoading(true);
    
    // The mock user data
    const mockUser = {
      uid: "12345",
      displayName: "Uzo Developer",
      email: "uzo@uskill.ng",
      photoURL: null, // You can add a URL string here for a profile image
    };

    // Simulate a small network delay for realism
    setTimeout(() => {
      // Save to State (for the app)
      setUser(mockUser);
      // Save to Storage (for persistence)
      localStorage.setItem("uskill_user", JSON.stringify(mockUser));
      
      setLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  // 5. Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("uskill_user"); // Clear from storage
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}