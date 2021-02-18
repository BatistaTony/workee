import Filter from '@/components/filter';
import Hero from '@/components/hero';
import Jobs from '@/components/jobs';
import Layout from '@/components/layout';
import SearchField from '@/components/searchField';
import { MainContent, SecContent } from '@/components/styles';

const Index = () => {
  return (
    <Layout title="Workeé">
      <Hero />
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
