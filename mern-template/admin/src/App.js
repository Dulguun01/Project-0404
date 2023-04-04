import { useCurrentUser } from "./hooks/useCurrentUser";
import { Routes, Route } from "react-router";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";

function App() {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return (
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    );
  }
  return <NotFoundScreen />;
}

export default App;
