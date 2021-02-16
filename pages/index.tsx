import Filter from '@/components/filter';
import Hero from '@/components/hero';
import Jobs from '@/components/jobs';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import SearchField from '@/components/searchField';
import { MainContent, SecContent } from '@/components/styles';

const Index = () => {
  return (
    <Layout>
      <Navbar />

      <MainContent>
        <SearchField />
        <SecContent>
          <Filter />
          <Jobs />
        </SecContent>
      </MainContent>
    </Layout>
  );
};

export default Index;
