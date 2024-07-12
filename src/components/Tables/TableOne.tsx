import React from 'react';
import { COMMENTS } from '../../types/comments'; // Assuming you have defined COMMENTS type

const commentsData: COMMENTS[] = [
  {
    avatar: './avatar/Havard University.jpeg',
    userName: 'havarduni',
    content: 'We are happy to join you in the advocacy programme.',
    post: ''
  },
  {
    avatar: './avatar/🖤.jpeg',
    userName: 'kendricklamar',
    content: 'They not like us',
    post: '',
  },
  {
    avatar: './avatar/Kylie Jenner has just launched her first eyeshadow palette.jpeg',
    userName: 'kyliejenner',
    content: 'How much is this?',
    post: '',
  },
  {
    avatar: './avatar/Pan-African Masquerade_ William Ruto with the Mask Off - Africa Interest.jpeg',
    userName: 'williamruto',
    content: 'I applaud all Genz',
    post: '',
  },
  {
    avatar: './avatar/Drake Instagram photo sparks fake abs surgery rumor.jpeg',
    userName: 'Drake',
    content: 'I bow down to Kendrik',
    post: '',
  },

  {
    avatar: './avatar/Havard University.jpeg',
    userName: 'havarduni',
    content: 'We are happy to join you in the advocacy programme.',
    post: ''
  },
  {
    avatar: './avatar/🖤.jpeg',
    userName: 'kendricklamar',
    content: 'They not like us',
    post: '',
  },
  {
    avatar: './avatar/Kylie Jenner has just launched her first eyeshadow palette.jpeg',
    userName: 'kyliejenner',
    content: 'How much is this?',
    post: '',
  },
  {
    avatar: './avatar/Pan-African Masquerade_ William Ruto with the Mask Off - Africa Interest.jpeg',
    userName: 'williamruto',
    content: 'I applaud all Genz',
    post: '',
  },
  {
    avatar: './avatar/Drake Instagram photo sparks fake abs surgery rumor.jpeg',
    userName: 'Drake',
    content: 'I bow down to Kendrik',
    post: '',
  },
];

const TableOne: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Comments
      </h4>

      <div className="flex flex-col">
        {/* Map through commentsData */}
        {commentsData.map((comment, key) => (
          <div
            key={key}
            className={`flex items-center ${
              key !== 0 ? 'mt-4' : '' // Add margin top for all except the first item
            }`}
          >
            {/* Avatar */}
            <img
              src= {comment.avatar} // Use default avatar if avatar is not available
              alt="Avatar"
              className="h-10 w-10 rounded-full object-cover"
            />

            {/* Username and Comment */}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{comment.userName}</p>
              <p className="text-sm text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
