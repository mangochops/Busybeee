import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import TableOne from '../../components/Tables/TableOne';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import SocialMediaPosts from '../../components/Maps/MapOne';

const Dashboard: React.FC = () => {
  return (
    <>
      <h3>Followers</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Instagram" total="3.456K" rate="0.43%" levelUp>
          <FaInstagram className="fill-primary dark:fill-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Facebook" total="4,543" rate="4.35%" levelUp>
          <FaFacebookF className="fill-primary dark:fill-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Twitter" total="2,450" rate="2.59%" levelUp>
          <FaTwitter className="fill-primary dark:fill-white" size={22} />
        </CardDataStats>
        <CardDataStats title="LinkedIn" total="456" rate="0.95%" levelDown>
          <FaLinkedinIn className="fill-primary dark:fill-white" size={22} />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <SocialMediaPosts />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Dashboard;
