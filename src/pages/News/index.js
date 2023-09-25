import {contentEvents} from '../../components/News'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const News = () => {

    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 9;
    const endOffset = itemOffset + itemsPerPage;
    const currentData = contentEvents.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(contentEvents.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % contentEvents.length;
        setItemOffset(newOffset);
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Tạo hiệu ứng cuộn mượt
          });
      };
    return ( 
        <>
            {
                currentData.map((contentItem, index) => {
                    return (
                        <div key={index} >
                            <a href={contentItem.link} target="_blank" rel="noopener noreferrer">
                                <img src={contentItem.urlImage} alt={contentItem.alt}/>
                                <div>{contentItem.title}</div>
                                <div>{contentItem.content}</div>
                                
                            </a>
                        </div>
                    )
                })
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />

        </>
     );
}

export default News;