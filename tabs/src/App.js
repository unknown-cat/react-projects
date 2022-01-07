import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (loading) {
    return <section className="section loading">Loading...</section>
  }

  const { title, dates, duties, company } = jobs[value]
  return (
    <section className='section'>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* button container */}
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duti, index) => (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{duti}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default App
