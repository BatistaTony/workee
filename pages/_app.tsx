import App from 'next/app';
import { GlobalStyle } from '@/components/layout/style';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle /> 
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
