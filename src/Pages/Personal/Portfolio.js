import React from 'react';
import { Link } from 'react-router-dom';
import coverPhoto from '../../assets/images/rafat.jpg';

const Portfolio = () => {
    return (
        <div>
            <img className='mx-auto justify-center rounded' src={coverPhoto} alt="" />
            <div className="card card-side mx-auto items-center w-96  bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">Tanvir Mahtab Rafat</h2>
                    <p className='text-sm'>BSc in CSE from AIUB</p>
                    <p className='text-secondary'>tanvirmahtab1996@gmail.com</p>

                    <h4 className='text-xl'>My Skill as a Web Developer</h4>
                    <div className='text-primary px-5'>
                        <li>HTML5 CSS3</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT JS</li>
                        <li>MONGODB</li>
                    </div>

                    <div className='font-bold'>
                        <h1>The Live Project which already deployed [here]</h1>

                        <div className='px-5'>
                            <p><Link to="https://inventory-management-237cb.web.app/" />1.Warehouse Management website</p>
                            <p><Link to="https://nimble-faun-182f51.netlify.app/" />2.E-Commerce Site</p>
                            <p><Link to="https://denticare-feb16.web.app" />3.Denti care Website</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;