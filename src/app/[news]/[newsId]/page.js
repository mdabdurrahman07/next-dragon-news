import { getSingleNews } from '@/utils/getSingleNews';
import React from 'react';

const NewsDetails = async ({params}) => {
    
    const data = await getSingleNews(params.newsId)
    console.log(data)
    return (
        <div>
            {params.newsId}
        </div>
    );
};

export default NewsDetails;