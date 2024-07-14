import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Trends = () => {
  // Dummy data for trends
  const trendsData = [
    { title: 'LinkedIn', description: '#freedomIsComingTommorrow #nodejs #cowork #csout #JudiciaryisDown #BlackFriday' },
    { title: 'Instagram', description: '#AngukaNayo #ForABetterKenya #RejectFinanceBill #maandamano' },
    { title: 'Twitter', description: '#wankers #WilliamRuto #AbabuNamwamba #KimaniWamatangi #TatuCity #RejectFinanceBill' },
    { title: 'Facebook', description: 'ChatGpt4.5 Ollama3 FinanceBill RejectaFinanceBill' },
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
