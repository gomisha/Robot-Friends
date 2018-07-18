import * as React from 'react';
import ISearchProps from './ISearchProps';

const SearchBox = (props: ISearchProps) => {
    return(
        <div className="pad2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robots"
                onChange={props.searchChange}
            />
        </div>
    );
};

export default SearchBox;