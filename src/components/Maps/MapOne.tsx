import React, { useEffect, useState } from 'react';
import Post1 from './../../posts/_The best time to buy life insurance was yesterday, the next best time is today__.jpeg'
import Post2 from './../../posts/black lives matter riots 2020 george floyd protests say their names.jpeg'
import Post3 from './../../posts/BMW X6.jpeg'
import Post4 from './../../posts/Radio 101_ Radio _Dictionary_ for National Radio Day.jpeg'
import Post5 from './../../posts/Data Security.jpeg'
import Post6 from './../../posts/rASp8uBr.jpeg'

interface Post {
  username: string;
  image_url: string;
  caption: string;
  timestamp: string; // ISO 8601 format date
}

const SocialMediaPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Dummy data for demonstration
    const dummyPosts: Post[] = [
      {
        username: '@jubileeinsurance',
        image_url: Post1,
        caption: 'Get a quote from us starting from 8.5% P.A.',
        timestamp: '2024-07-07T18:45:00Z', // ISO 8601 format date
      },
      {
        username: '@homeboyzradio',
        image_url: Post2,
        caption: 'What inspired todays Kenyan protests?',
        timestamp: '2024-07-06T14:20:00Z', // ISO 8601 format date
      },
      {
        username: '@kaiandkaro',
        image_url: Post3,
        caption: 'This BMW X4 is out for sale for just a fair price of 4.5Mksh.',
        timestamp: '2024-07-07T18:45:00Z', // ISO 8601 format date
      },
      {
        username: '@classic100fm',
        image_url: Post4,
        caption: 'Arise and shine with your favourite hosts @kingangi and @mainakageni to get you ready to tackle your day.',
        timestamp: '2024-07-06T14:20:00Z', // ISO 8601 format date
      },
      {
        username: '@classic100fm',
        image_url: Post5,
        caption: 'Arise and shine with your favourite hosts @kingangi and @mainakageni to get you ready to tackle your day.',
        timestamp: '2024-07-06T14:20:00Z', // ISO 8601 format date
      },
      {
        username: '@classic100fm',
        image_url: Post6,
        caption: 'Arise and shine with your favourite hosts @kingangi and @mainakageni to get you ready to tackle your day.',
        timestamp: '2024-07-06T14:20:00Z', // ISO 8601 format date
      },
    ];

    // Simulate fetching posts after a delay (for demonstration)
    setTimeout(() => {
      setPosts(dummyPosts);
    }, 1000); // 1 second delay for demonstration purposes
  }, []);

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7 w-full">
      <h5 className="text-xl font-semibold text-black dark:text-white mb-4">Recent Posts</h5>
      <div className='grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 sm:grid-cols-2 sm:gap-6 2xl:gap-7.5 '>
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Post Image */}
            <img src={post.image_url} alt="Post" className="w-full h-48 object-cover" />

            {/* Post Details */}

          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaPosts;
