import { COMMENTS } from '../../types/comments';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';


const commentsData: COMMENTS[] = [
  {
    avatar: BrandOne,
    userName: 'ntvKenya',
    content: 'How much is ',
    post: BrandOne,
  },
  {
    avatar: BrandOne,
    userName: 'ntvKenya',
    content: 'How much is ',
    post: BrandOne,
  },
  {
    avatar: BrandTwo,
    userName: 'ntvKenya',
    content: 'How much is ',
    post: BrandTwo,
  },
  {
    avatar: BrandThree,
    userName: 'ntvKenya',
    content: 'How much is ',
    post: BrandThree,
  },
  {
    avatar: BrandFour,
    userName: 'ntvKenya',
    content: 'How much is ',
    post: BrandFour,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Comments
      </h4>

      <div className="flex flex-col">
        
{/* Map the comments from each account */}
        {commentsData.map((comment, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === commentsData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div>
              <img src={comment.avatar} alt=''/>
              <div>
                <h5>{comment.userName}</h5>
                <p>{comment.content}</p>
              </div>
              <img src={comment.post} alt='' />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
