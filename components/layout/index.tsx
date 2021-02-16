import { Layout as AntLayout } from 'antd';
import head from 'next/head';

interface ILayout {
  title?: string;
  children: any;
}

const { Content } = AntLayout;

const Layout = ({ title, children }: ILayout) => {
  return (
    <AntLayout>
      <head>
        <title>{title || 'Workeé'}</title>
      </head>

      <AntLayout>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
