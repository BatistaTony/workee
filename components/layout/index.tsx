import { Layout as AntLayout } from 'antd';
import Head from 'next/head';
import Navbar from '../navbar';

interface ILayout {
  title: string;
  children: any;
}

const { Content } = AntLayout;

const Layout = ({ title, children }: ILayout) => {
  return (
    <AntLayout style={{ backgroundColor: 'transparent', height: 'auto' }}>
      <Head>
        <title>{title || 'Workeé'}</title>
      </Head>

      <Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Navbar title={title} />
        {children}
      </Content>
    </AntLayout>
  );
};

export default Layout;
