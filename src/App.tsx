import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ConfigProvider, theme } from "antd";

function App() {
  const { token } = theme.useToken();

  const customTheme = {
    ...token,
    // colorPrimary: "#1c9a92",
    // colorPrimaryActive: "#1c9a92",
    // colorPrimaryBg: "#1c9a92",
    // colorPrimaryBgHover: "#1c9a92",
    // colorPrimaryBorder: "#1c9a92",
    // colorPrimaryBorderHover: "#1c9a92",
    // colorPrimaryHover: "#1c9a92",
    // colorPrimaryText: "#1c9a92",
    // colorPrimaryTextActive: "#1c9a92",
    // colorPrimaryTextHover: "#1c9a92",
    colorPrimary: "#1c9a92", // Base color
    colorPrimaryActive: "#157e78", // Slightly darker for active state
    colorPrimaryBg: "#e0f5f4", // Lightened version for background
    colorPrimaryBgHover: "#c8efee", // Slightly darker background for hover
    colorPrimaryBorder: "#1c9a92", // Same as base color for borders
    colorPrimaryBorderHover: "#13807a", // Darker border for hover
    colorPrimaryHover: "#189d95", // Slightly brighter hover state
    colorPrimaryText: "#1c9a92", // Same as base for text
    colorPrimaryTextActive: "#157e78", // Darker for active text
    colorPrimaryTextHover: "#189d95", // Brighter for text hover
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
