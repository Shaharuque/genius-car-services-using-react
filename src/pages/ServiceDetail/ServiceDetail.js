import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    //url parameter read
    const { serviceId } = useParams()

    return (
        <div>
            <h2>Welcome to details:{serviceId}</h2>
            <Link to='/checkout'>
                <button>
                    Procced checkout
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;