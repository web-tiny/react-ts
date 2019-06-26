import { DatePicker, LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale-provider/zh_CN';
import * as moment from 'moment';
import 'moment/locale/zh-cn';
import * as React from 'react';
import './App.css';

moment.locale('zh-cn');
class App extends React.Component {
  public render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div className="App">
          <DatePicker />
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
