import React from 'react';
import { useParams } from 'react-router-dom';

const ProviderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Fetch provider details based on `id` or use mock data

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Provider Details for ID: {id}</h2>
      {/* Display detailed provider information here */}
    </div>
  );
};

export default ProviderDetail;
