import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import PublicRouters from "./routes";
import { store } from "./redux/store";
import zh_CN from "antd/es/locale/zh_CN";
import vi_VN from "antd/es/locale/vi_VN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

function App() {
  return (
    <ConfigProvider locale={zh_CN}>
      <IntlProvider locale="en">
        <Provider store={store}>
          <PublicRouters />
        </Provider>
      </IntlProvider>
    </ConfigProvider>
  );
}

export default App;
