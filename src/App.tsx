import { useEffect } from "react";
import AppRoutes from "./app/routes/AppRoutes";
import ScrollToTop from "./app/utils/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

function App() {
  useEffect(() => {
    // Restrictions removed to allow debugging and mobile view verification
  }, []);

  return (
    <>
      <AuthProvider>
        <ScrollToTop />
        <AppRoutes />
      </AuthProvider>
    </>

  );
}

export default App;
