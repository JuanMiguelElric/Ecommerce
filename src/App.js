import RouteApp from "./route";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouteApp />

      </AuthProvider>

    </div>
   
  );
}

export default App;
