import React from 'react';


const SearchBox = ({searchChange,searchfield}) =>{
    return(
        <input
        type='search' 
        placeholder='Search here for robots'
        className='tc ma3 pa3 ba bw2 b--white bg-lightest-blue br3'
        onChange={searchChange}
        />
    )
}

export default SearchBox;