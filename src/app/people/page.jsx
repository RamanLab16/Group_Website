// pages/team.js
"use client";
import Image from 'next/image';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Prof. Dr. V. Ramanathan',
    role: 'Head of Group',
    email: 'vraman.chy[at]itbhu.ac.in',
    phone: '+49 6151 16-22621',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/sir_imgg.png', // Replace with actual image path
  },
  {
    name: 'Prashant Kumar Pandey',
    role: 'Ph.D. Student',
    email: 'prashantkpandey.rs.chy24[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/prashant.png', // Replace with actual image path
  },
  {
    name: 'Nitu',
    role: 'Ph.D. Student',
    email: 'nitu.rs.chy24[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/nitu.png', // Replace with actual image path
  },
  {
    name: 'Bharti',
    role: 'Ph.D. Student',
    email: 'bharti.rs.chy24[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/bharti.png', // Replace with actual image path
  },
  {
    name: 'Ajay',
    role: 'Ph.D. Student',
    email: 'ajaykumarbind.rs.chy24[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/ajay.png', // Replace with actual image path
  },
  {
    name: 'Dr. S Arul Selvan',
    role: 'Ph.D. Student',
    email: 'arulsevans.rs.chy24[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/arul.png', // Replace with actual image path
  },
  {
    name: 'Dr. Darshini George',
    role: 'Ph.D. Student',
    email: 'dharshinigeorge.rs.chy24[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/dharshini.png', // Replace with actual image path
  },
  {
    name: 'Sonia Sharma',
    role: 'M.Sc. Student',
    email: 'sonia.chy23[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/sonia.png', // Replace with actual image path
  },
  {
    name: 'Ishaan Misra',
    role: 'Undergraduate Student',
    email: 'ishaan.misra.chy20[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/ishaan.png', // Replace with actual image path
  },
  {
    name: 'Ravi Kumar',
    role: 'Undergraduate Student',
    email: 'ravi.kumar.chy21[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/ravi.png', // Replace with actual image path
  },
  {
    name: 'D N Siva Sathyaseelan',
    role: 'Undergraduate Student',
    email: 'dnsiva.sathyaseelan.chy21[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/siva.png', // Replace with actual image path
  },
  {
    name: 'Pranjul Malpani',
    role: 'Undergraduate Student',
    email: 'pranjul.malpani.chy22[at]itbhu.ac.in',
    office: 'Dept. of Chemistry | IIT-BHU',
    image: '/people/pranjul.png', // Replace with actual image path
  },
  // Add more members here...
];

const pastMembers = [
  
  {
    name: 'Dr. Vivek Kumar Yadav',
    post: 'NPDF',  
  },
  //NPDF
  {
    name: 'Dr. Arti Saroj', 
    post: 'Ph.D. Student',   
  },
  {
    name: 'Dr. Poonam bhadoria',
    post: 'Ph.D. Student',  
  },
  {
    name: 'Dr. Manish Kumar Tripathi',
    post: 'Ph.D. Student',  
  },
  //phd students
  {
    name: 'Abhishek Singh Bhadauria',
    post: 'M.Sc. Student', 
  },
  {
    name: 'Ayushi Kanaujia',
    post: 'M.Sc. Student',
  },
  {
    name: 'Ananya Dash',
    post: 'M.Sc. Student',
  },
  {
    name: 'Chatla Shivani',
    post: 'M.Sc. Student',
  },
  {
    name: 'Arun Kumar',
    post: 'M.Sc. Student',
  },
  {
    name: 'Mukul Pratap',
    post: 'M.Sc. Student',
  },
  {
    name: 'Seveli Kaur',
    post: 'M.Sc. Student',
  },
  //msc students
  {
    name: 'Jay Naresh Dhanwant',
    post: 'UG Student',
  },
  {
    name: 'Sangeeta Mishra',
    post: 'UG Student',
  },
  {
    name: 'Banoth Vinay Kumar',
    post: 'UG Student',
  },
  {
    name: 'Atul Harish Dorge',
    post: 'UG Student',
  },
  {
    name: 'Pankaj Phogat',
    post: 'UG Student',
  },
  //idd
  {
    name: 'Arnav Paul',
    post: 'Intern (from NISER Bhuvaneshwar)',
  },
  {
    name: 'Debashish Swain',
    post: 'Intern (from NISER Bhuvaneshwar)',
  },
  {
    name: 'Sanjeev Kumar Jha',
    post: 'Intern (from CU Haryana - currently TIFR) ',
  },
  {
    name: 'Shivani Aggarwal',
    post: 'DST KARYA Programme',
  },
  {
    name: 'Kushagra Saini',
    post: 'IIT-BHU (Chemical Engineering)',
  },
  {
    name: 'Vikrant Singh',
    post: 'NIT Durgapur',
  },
  {
    name: 'Samir Samanta',
    post: 'NIT Durgapur',
  },
  //interns
  // Add more past members here...
];

// export default function Team() {
//   const [showPastMembers, setShowPastMembers] = useState(false);

//   const togglePastMembers = () => {
//     setShowPastMembers((prev) => !prev);
// };

export default function Team() {
  const [showPastMembers, setShowPastMembers] = useState(false);

  const togglePastMembers = () => {
    setShowPastMembers((prev) => !prev);
  };
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-500 text-sm mt-2">
              <strong>Email:</strong> {member.email}
            </p>
            {/* <p className="text-gray-500 text-sm">
              <strong>Phone:</strong> {member.phone}
            </p> */}
            <p className="text-gray-500 text-sm">
              <strong>Office:</strong> {member.office}
            </p>
          </div>
        ))}
      </div>
      {/* Past Members Section */}
      <div className="mt-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 cursor-pointer bg-gray-200 flex items-center justify-center" onClick={togglePastMembers}>
          Past Members <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ml-1 transition-transform ${showPastMembers ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </h2>
        {showPastMembers && (
          <div className="bg-white rounded-lg shadow-md p-4">
            {pastMembers.map((member, index) => (
              <div key={index} className="py-2">
                <hr className="border-t border-gray-300" />
                <p className="text-center mt-2">
                  <strong>{member.name}</strong> 
                  {/* - {member.post} */}
                  <span className="font-light text-gray-500"> - {member.post}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
