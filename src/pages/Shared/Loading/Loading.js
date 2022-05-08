import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',marginTop:'200px'}}>
        <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;