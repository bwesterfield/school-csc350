type PaginationProperties = {
  firstEntry: string;
  secondEntry: string;
  thirdEntry: string;
  nextEntry: string;
};

export default function Pagination({ firstEntry, secondEntry, thirdEntry, nextEntry }: PaginationProperties) {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-end'>
        <li className='page-item disabled'>
          <a className='page-link' href='#' tabIndex={-1}>
            Previous
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href={firstEntry}>
            1
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href={secondEntry}>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href={thirdEntry}>
            3
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href={nextEntry}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
