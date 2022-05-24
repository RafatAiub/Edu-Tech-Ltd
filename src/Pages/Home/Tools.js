import React from 'react';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
            "_id": 1,
            "img": "https://www.bing.com/th?id=OIP.soux9pgEMtNM_HXc4_iWowHaLC&w=136&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            "name": "Hammer",
            "description": '',
            "price": 200,
            "minimum": 100,
            "available": 1000
        },
        {
            "_id": 2,
            "img": 'https://www.bing.com/th?id=OIP.Sl5gbhcpDWCA3oiFCi3YswHaGv&w=150&h=136&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
            "name": "Drill Machine",
            "description": "",
            "price": 5000,
            "minimum": 100,
            "available": 1000
        },
        {
            "_id": 3,
            "name": "Tape Measure",
            "img": 'https://th.bing.com/th/id/OIP.KZ_kp4g77QOXu_ZN7VK_9AHaFq?w=239&h=183&c=7&r=0&o=5&pid=1.7',
            "description": "",
            "price": 200,
            "minimum": 100,
            "available": 1000
        },
        {
            "_id": 4,
            "name": "Screw Driver",
            "img": 'https://www.bing.com/th?id=OIP.wmOTVjzNlXSHnsLH-LdigQHaFj&w=207&h=160&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
            "description": "",
            "price": 150,
            "minimum": 100,
            "available": 1000
        },
        {
            "_id": 5,
            "name": "Multimeter",
            "img": 'https://th.bing.com/th/id/OIP.w7EZTgo78nDBL2TgGRYixgHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7',
            "description": "",
            "price": 100,
            "minimum": 100,
            "available": 1000
        },
        {
            "_id": 6,
            "name": "PLus",
            "img": 'https://th.bing.com/th/id/OIP.K0zY83vY9XRf8zXu-yzX1gHaIq?pid=ImgDet&w=207&h=241&c=7',
            "description": "",
            "price": 500,
            "minimum": 100,
            "available": 1000
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>Tools We Manufacture</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;