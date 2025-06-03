import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <BrowserRouter>
          <Header /> {/* ヘッダーは全ページで共通表示 */}
          <main className="main-content">
            <AppRoutes /> {/* ルーティングコンポーネントを配置 */}
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
