import Footer from '@/components/footer';
import JobContainer from '@/components/job/jobContainer';
import Layout from '@/components/layout';

const Job = () => {
  return (
    <Layout title="Workeé">
      <JobContainer />
      <Footer/>
    </Layout>
  );
};

Job.getInitialProps = async () => {
  return {};
};

export default Job;
