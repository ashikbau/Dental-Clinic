import React, { useEffect } from 'react';

const DarkMode = ({theme,setTheme}) => {
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])
    const handleThemeSwitch =()=>{
        setTheme(theme === 'dark'? 'light' : 'dark');
    }
    return (
        <div>
            <button onClick={handleThemeSwitch} className='bg-green-200 p-4 items center'>
                darkmode
            </button>
        </div>
    );
};

export default DarkMode;