import React from 'react';
import { RingLoader } from 'react-spinners';
import './Loader.scss';

const Loader = ({isLoading}) => (
    <div className="Loader">
        <RingLoader
            size={100}
            color={"#34495e"}
            loading={isLoading}
        />
    </div>
);

export default Loader;