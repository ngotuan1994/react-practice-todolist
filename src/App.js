import './App.scss';
import { useState } from 'react';
function App() {
  const [jobs, setJobs] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('jobs'))
    return storage ?? [];
  });
  const [job, setJob] = useState('');

  const handleClick = ()=> {
    setJobs(prev => {
      const jsonJobs = JSON.stringify([...prev, job]);
      localStorage.setItem('jobs', jsonJobs);


      return [...prev, job]
    });
    setJob('');
    document.querySelector('.listInput').focus();
  }
  const handleDelete = (parameter) => {
    const filter = jobs.filter(job => job !== parameter)
    setJobs(filter);
    document.querySelector('.listInput').focus();
  }
  return (

    <div className="App">
      <input className="listInput" value={job}  onChange={e => setJob(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <div >
        <ul className="listContainer">
        {jobs.map((job, index) => (
          <li key={index} >{job} <button job={job} onClick={ () => handleDelete(job)} style={{marginLeft : 15}}>Delete</button></li>

          ))
        }
      </ul>
      </div>

    </div>
  );
}

export default App;
