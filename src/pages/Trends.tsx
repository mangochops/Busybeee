import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Trends = () => {
  // Dummy data for trends
  const trendsData = [
    { title: 'Social Media Trend 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Social Media Trend 2', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { title: 'Social Media Trend 3', description: 'Nulla venenatis dui nec dignissim tristique.' },
    { title: 'Social Media Trend 4', description: 'Fusce efficitur neque ac tellus sagittis, et dapibus mi bibendum.' },
  ];

  return (
    <>
      <Breadcrumb pageName="Trends" />

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {trendsData.map((trend, index) => (
              <div key={index} className="bg-boxdark rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-bold mb-2 text-white">{trend.title}</h3>
                <p className="text-white">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trends;
