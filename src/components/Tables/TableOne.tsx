import React from 'react';
import { COMMENTS } from '../../types/comments'; // Assuming you have defined COMMENTS type
import  Avatar1 from './avatar/Havard University.jpeg';
import  Avatar2 from './avatar/🖤.jpeg';
import  Avatar3 from './avatar/Kylie Jenner has just launched her first eyeshadow palette.jpeg';
import  Avatar4 from './avatar/Pan-African Masquerade_ William Ruto with the Mask Off - Africa Interest.jpeg';
import  Avatar5 from './avatar/Drake Instagram photo sparks fake abs surgery rumor.jpeg'
'./avatar/Drake Instagram photo sparks fake abs surgery rumor.jpeg';
import  Avatar6 from './avatar/@𝑇ℎ𝑎𝑡𝑡𝑡𝑡𝑠_𝑁𝑖𝑎𝑗𝑎ℎ.jpeg';
import  Avatar7 from './avatar/Ralph Lauren, Spelman and Morehouse Come Together on a New Collection.jpeg';
import  Avatar8 from './avatar/The Polo Gazette Issue No_ 3 l Pattern Matters.jpeg';
import  Avatar9 from './avatar/Follow__Shangirastafari.jpeg';

const commentsData: COMMENTS[] = [
  {
    avatar: Avatar1,
    userName: 'havarduni',
    content: 'We are happy to join you in the advocacy programme.',
    post: ''
  },
  {
    avatar: Avatar2,
    userName: 'kendricklamar',
    content: 'They not like us',
    post: '',
  },
  {
    avatar: Avatar3,
    userName: 'kyliejenner',
    content: 'How much is this?',
    post: '',
  },
  {
    avatar: Avatar4,
    userName: 'williamruto',
    content: 'I applaud all Genz',
    post: '',
  },
  {
    avatar: Avatar5,
    userName: 'Drake',
    content: 'I bow down to Kendrik',
    post: '',
  },

  {
    avatar: Avatar6,
    userName: 'Moseskuria',
    content: 'We are happy to join you in the advocacy programme.',
    post: ''
  },
  {
    avatar: Avatar7,
    userName: 'kindiki1',
    content: 'They not like us',
    post: '',
  },
  {
    avatar: Avatar8,
    userName: 'AbabuNamwamba',
    content: 'Actively looking for a job',
    post: '',
  },
  {
    avatar: Avatar9,
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
              <p className="text-md font-medium text-white">{comment.userName}</p>
              <p className="text-sm text-white">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
