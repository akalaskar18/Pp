import React from 'react'
import project from './project.css'
const Project = () => {
  return (
    <section id='project'>
        
        <div className='ptital'>
            <h1 className='personalprojects'> Personal project</h1>

                <h1 className='Couriert'>1. Courier Service Management</h1>
                <p className='abp'><h1 className='type1'>React (Frontend):</h1>
        
             Library for building dynamic user interfaces.
Handles UI components and user interactions.
Communicates with the backend via APIs.
<h1 className='type1'>J2EE (Backend):</h1>

Java-based framework for enterprise applications.
Uses servlets, EJB, and JPA.
Manages business logic, transactions, and database interactions.
<h1 className='type1'>MySQL (Database):</h1>

Relational Database Management System (RDBMS).
Stores courier, shipment, and client data.
Supports CRUD operations with SQL queries.
<h1 className='type1'>Integration:</h1>Integration:

RESTful APIs for communication.
JWT for authentication and authorization.
<h1 className='type1'>Features:</h1>

Real-time updates using WebSocket or SSE.
Logging, monitoring, and role-based access.
Deployment:

Docker for containerization.
Kubernetes for container orchestration.
This tech stack enables a comprehensive Courier Service Management 
System with a responsive frontend, robust backend, secure data storage, 
and additional features for real-time updates and system monitoring.</p>


<h1 className='Couriert'>2. License Plate Recognition</h1>
<p className='abp2'>Implemented License Plate Recognition using Python and computer vision. This project involved locating
license plates in images or videos, segmenting characters, recognizing them with OCR, and outputting plate
information. Utilized OpenCV, TensorFlow, and Tesseract libraries for efficient license plate recognition.</p>
        </div>
    </section>

)}

export default Project
