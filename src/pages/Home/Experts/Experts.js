import React from 'react';
// import experts image
import expert1 from '../../../images/images/experts/expert-1.jpg'
import expert2 from '../../../images/images/experts/expert-2.jpg'
import expert3 from '../../../images/images/experts/expert-3.jpg'
import expert4 from '../../../images/images/experts/expert-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will-smith', img: expert1 },
    { id: 2, name: 'Will-mewao', img: expert2 },
    { id: 3, name: 'samual gaye', img: expert3 },
    { id: 4, name: 'samual gay', img: expert4 },
]
const Experts = () => {
    return (
        <div id='experts' className='container mt-4'>
            <h3 className='text-info text-center'>OUR EXPERTS<small className='text-secondary'> always waiting to serve you.</small></h3>
            <div className="row">
                    {
                        experts.map(expert => <Expert expert={expert} key={expert.id}></Expert>)
                    }
            </div>
        </div>
    );
};

export default Experts;