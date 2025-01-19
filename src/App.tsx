import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ConfigProvider, theme } from "antd";

function App() {
  const { token } = theme.useToken();
  console.log(token);
  const customTheme = {
    ...token,
    colorPrimary: "#1c9a92",
    colorPrimaryActive: "#1c9a92",
    colorPrimaryBg: "#1c9a92",
    colorPrimaryBgHover: "#1c9a92",
    colorPrimaryBorder: "#1c9a92",
    colorPrimaryBorderHover: "#1c9a92",
    colorPrimaryHover: "#1c9a92",
    colorPrimaryText: "#1c9a92",
    colorPrimaryTextActive: "#1c9a92",
    colorPrimaryTextHover: "#1c9a92",
  };
  return (
    <>
      <ConfigProvider theme={{ token: customTheme }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
