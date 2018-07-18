import * as React from 'react';

const SearchBox = () => {
    return(
        <div className="pad2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robots"/>
        </div>
    );
};

export default SearchBox;