import { useEffect } from 'react';

const useTitle = (title) => {
   
    useEffect(() => {
        document.title = `${title} - Dental-Clinic`;
    }, [title])
     
};

export default useTitle;