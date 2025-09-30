import React from 'react'
import { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import PaginationBtnContainer from './PaginationBtnContainer'


function JobsContainer() {
  const {jobs, isLoading, page, totalJobs, numOfPages} = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(getAllJobs())
  }, [])
  
  if(isLoading){
    return(
      <Wrapper>
      <Loading center/>
    </Wrapper>
  )
}

if(jobs.length === 0 ){
  return(
    <Wrapper>
      <h2> There is no job to display...</h2> 
    </Wrapper>
  )
}


  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return (
            <Job
              key={job._id}
              {...job}
            />
          );
        })}
      </div>
      {numOfPages>1 && <PaginationBtnContainer />}
    </Wrapper>
  );
}

export default JobsContainer