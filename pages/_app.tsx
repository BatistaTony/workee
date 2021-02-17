import App from 'next/app';
import { GlobalStyle } from '@/components/layout/style';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './../store';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default MyApp;
