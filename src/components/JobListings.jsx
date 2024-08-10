import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import React from 'react'
import { ClipLoader } from 'react-spinners';
import Spinner from './Spinner';


const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect( () => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
        setLoading(false);
      }catch(err){
        console.log('error fetching data',err);
      }
    }
    fetchJobs();
  },[]);
  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          
            {loading ? (
              <Spinner/>
            ): (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <>
                {jobs.map((job) => (
                 <JobListing key={job.id} job={job}/>
            )) }
            
              </>
              </div>
            )
            

            }
            {/* <!-- Job Listing 1 --> */}
           
           
          
        </div>
      </section>
    </div>
  )
}

export default JobListings