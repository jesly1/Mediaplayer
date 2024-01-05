import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Category() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <>
    
    <Link onClick={handleShow} ><button className='btn btn-warning'>Add New Category</button></Link>
   

      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class="fa-solid fa-pencil text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h6>Please fill the following details</h6>
         <br />
         <div className='border border-secondary'   style={{width:"100%",height:"150px",padding:"6px"}}>
            <input className='form-control mt-3 ' type="text" placeholder='Enter Category ID' />
            <input className='form-control mt-3' type="text" placeholder='Enter Category Name' />
            </div>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category
