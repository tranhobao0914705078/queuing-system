import React, {useState} from 'react';
import styles from'./Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight}
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Props{
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }: Props) => {

    const [selectedPage, setSelectedPage] = useState(currentPage);

    const handleClick = (pageNumber: number) => {
        setSelectedPage(pageNumber);
        onPageChange(pageNumber);
    }

    const pageNumbers = []
    for( let i = 0; i <= totalPages; i++){
        pageNumbers.push(i); 
    }
    return(
        <div className={styles.Paginate}>
            <button className={styles.Prev} disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button> 
            {pageNumbers.map((index, pageNumber) => 
                <button key={index} className={`${styles.numberPagi} ${pageNumber === selectedPage ? styles.active : ''}`} 
                    onClick={() => handleClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            )}    
            <button className={styles.Next} disabled={currentPage === totalPages} onClick={() => handleClick(currentPage + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}
export default Pagination;