import React from 'react';

const DynamicCategories = ({searchParams}) => {
    return (
        <div>
            <h1>Dynamic Categories {searchParams.category}</h1>
        </div>
    );
};

export default DynamicCategories;