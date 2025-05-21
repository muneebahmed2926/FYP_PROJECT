import { useState } from 'react';
import SearchBar from './components/views/home/SearchBar';
import SupervisorCard from './components/views/home/SupervisorCard';
import FilterSidebar from './components/views/home/FilterSidebar';
import Pagination from './components/views/home/Pagination';
import SupervisorProfile from './components/views/home/SupervisorProfile';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const supervisorData = {
    name: 'Dr. Jane Doe',
    department: 'Computer Science Department',
    researchAreas: ['Machine Learning', 'Computer Vision', 'AI'],
    studentsCount: 5,
    rating: 4.8,
    reviewsCount: 12,
    email: 'j.doe@university.edu',
    expertise: ['Deep Learning', 'Neural Networks', 'Natural Language Processing'],
    studentsSupervised: 8
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar />
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>
        <div className="w-full md:w-3/4 space-y-6">
          <SupervisorCard {...supervisorData} />
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
          <SupervisorProfile supervisor={supervisorData} />
        </div>
      </div>
    </div>
  );
}

export default App;
