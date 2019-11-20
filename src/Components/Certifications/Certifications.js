import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import Certification from './Certification';
import { FaAward } from "react-icons/fa";
import './Certifications.css';

const Certifications = () => {
    return(
        <div className='Certifications'>
             <div style={{display: 'flex', height: '100px'}}>
                <FaAward
                        style={{
                            color: '#0889a3', 
                            fontSize: '60px', 
                            marginTop: '22px',
                            marginRight: '12px'
                    }}/>
                <div className='experience-title'>
                    <p>Certifications</p>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Certification 
                    course='Course1'
                    name="Neural Networks and Deep Learning"
                    Issued_Organization="Coursera"
                    date="June 2019"
                />
                <Certification 
                    course='Course2'
                    name="Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization"
                    Issued_Organization="Coursera"
                    date="August 2019"
                />
                <Certification 
                    course='Course3'
                    name="Structuring Machine Learning Projects"
                    Issued_Organization="Coursera"
                    date="September 2019"
                />
            </div>
        </div>
    )
}

export default Certifications;