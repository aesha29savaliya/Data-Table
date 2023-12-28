import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TableData = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/posts')
               .then((response) => {
                    setData(response.data); // Use response.data instead of just response
               })
               .catch((error) => {
                    console.error('Error fetching data:', error);
               });
     }, []);

     return (
          <div>
               <h1>Table</h1>
               <table border={1} >
                    <thead className='bg-info text-white'>
                         <tr>
                              <th>ID</th>
                              <th>Title</th>
                              <th>Body</th>
                         </tr>
                    </thead>
                    <tbody>
                         {data.map((value) => (
                              <tr key={value.id}>
                                   <td>{value.id}</td>
                                   <td>{value.title}</td>
                                   <td>{value.body}</td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
};

export default TableData;
