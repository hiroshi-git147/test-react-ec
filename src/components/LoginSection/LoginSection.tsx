import styles from "./LoginSection.module.css";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/AuthContext";
import axios, { AxiosError } from "axios";

const Login = () => {
  // 入力するメールアドレスを状態として管理
  const [email, setEmail] = useState("");
  // 入力するパスワードを状態として管理
  const [password, setPassword] = useState("");
  // ログイン結果
  const [message, setMessage] = useState("");
  // API呼び出し中のローディング状態を管理
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault(); // Prevent default form submission
      setIsLoading(true);
      setMessage(""); // 以前のメッセージをクリア
      // 入力されたemailとpasswordをPOSTでAPIに送る
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      console.log("Login API response:", response);
      // 成功時にレスポンスからトークンを表示
      const authToken = response.data.token;
      setToken(authToken);
      // ログイン成功時の処理
      setMessage("ログイン成功！商品一覧ページにリダイレクトします。");
      // 1秒後に商品一覧ページに遷移する例
      setTimeout(() => {
        navigate("/items");
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        // メールアドレスとパスワード入力エラー
        if (axiosError.response && axiosError.response.status === 401) {
          setMessage("ログイン失敗：メールアドレスかパスワードが違います。");
        } else {
          setMessage(
            "通信エラーが発生しました。サーバーが起動しているか確認してください。"
          );
          console.error("Login API error:", axiosError.message);
        }
      } else {
        setMessage("予期せぬエラーが発生しました。");
        console.error("Unexpected error during login:", error);
      }
    }
    setIsLoading(false);
  };

  return (
    <section className={styles.login__section}>
      <h1 className={styles.login__title}>Login</h1>
      <form onSubmit={handleLogin} className={styles.login__form}>
        <div>
          <p className={styles.login__label}>e-mail</p>
          <input
            type="email"
            className={styles.login__input}
            placeholder="admin@lh.sandbox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // fullWidth is a MUI prop, you might need to handle width with CSS
            required
          />
        </div>
        <div>
          <p className={styles.login__label}>password</p>
          <input
            type="password"
            className={styles.login__input}
            placeholder="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // fullWidth is a MUI prop, you might need to handle width with CSS
            required
          />
        </div>

        <div className={styles.login__button}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "ログイン中..." : "ログイン"}
          </button>
        </div>

        {message && (
          <p
            style={{
              color: message.includes("成功") ? "green" : "red", // Basic color styling
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Login;
