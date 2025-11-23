// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className='parent'>
//       <Card/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Card from './components/Card'

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$85/hr",
    location: "Mountain View, CA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$92/hr",
    location: "Seattle, WA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Junior-level",
    pay: "$75/hr",
    location: "Redmond, WA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$100/hr",
    location: "Menlo Park, CA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$80/hr",
    location: "Cupertino, CA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$110/hr",
    location: "Los Gatos, CA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$95/hr",
    location: "Santa Clara, CA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "2 weeks ago",
    post: "Research Scientist",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$120/hr",
    location: "San Francisco, CA, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 days ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$88/hr",
    location: "Austin, TX, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior-level",
    pay: "$65/hr",
    location: "San Jose, CA, USA",
  }
];
const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
        <Card company={elem.companyName} post={elem.post} 
        datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2}
         pay ={elem.pay} location ={elem.location} logo = {elem.brandLogo}/></div>
      })}
    </div>
  )
}

export default App
