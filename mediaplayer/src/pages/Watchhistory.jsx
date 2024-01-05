import React from 'react'
import { Link } from 'react-router-dom'


function Watchhistory() {

  return (
    <>
    <div className='d-flex justify-content-evenly'>
    <h3 >Watch history</h3>
      <Link style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-arrow-left me-3 fa-1x"></i>Back to Home </Link>
    </div>
    <table className='table container mb-5 mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
        
      </thead>
      <tbody>
        <tr>
         <td>1</td>
         <td>Heeriye</td>
         <td>https://youtu.be/9RDnVzHM7ng</td>
         <td>21-12-23 01:23 PM</td>
         <td>Delete</td>
        </tr>
        <tr>
         <td>1</td>
         <td>Heeriye</td>
         <td>https://youtu.be/9RDnVzHM7ng</td>
         <td>21-12-23 01:23 PM</td>
         <td>Delete</td>
        </tr>
      </tbody>
    </table>
      
    </>

  )
}

export default Watchhistory
