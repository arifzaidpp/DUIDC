import React from 'react';
import useSubscribers from '../../hooks/useGetAllSubscribers';

const Subscriber = () => {
  const { subscribers, loading, error } = useSubscribers();

  if (loading) {
    return (
      <div className="p-4 md:ml-64">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 md:ml-64">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto my-16">
          <div className="bg-gray-100 py-2 px-4">
            <h2 className="text-xl font-semibold text-gray-800">
              All Subscribers
            </h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {subscribers.map((subscriber, index) => (
              <li key={index} className="flex items-center py-4 px-6">
                <span className="text-gray-700 text-lg font-medium mr-4">
                  {index + 1}.
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-800">
                    <a href={`mailto:${subscriber.email}`}>{subscriber.email}</a>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
