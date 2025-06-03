import { createContext, useContext, useState, ReactNode } from "react";

// AuthContextの型定義
interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

// デフォルトの値として空のトークンを設定
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProviderコンポーネント
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  // トークンを設定し、localStorageに保存
  const handleSetToken = (newToken: string | null) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuthフックでコンテキストにアクセスする
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
