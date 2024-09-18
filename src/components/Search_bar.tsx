import React, { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Search: FC = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate(); 

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        
        
        navigate({
            pathname: "/products",
            search: `?search=${keyword}`,
        });
    };

    return (
        <div className="search-main">
            <form onSubmit={submit}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                />
                <button type="submit" className='search-main-button'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
