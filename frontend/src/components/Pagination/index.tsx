import { ReactComponent as ArrowPrevious } from "assets/img/arrowPreviousIcon.svg";
import { ReactComponent as ArrowNext } from "assets/img/arrowNextIcon.svg";
import "./styles.css";
import { MoviePage } from "types/movie";

type Props = {
  page: MoviePage;
  onChange: Function;
};

function Pagination({ page, onChange }: Props) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <ArrowPrevious />
        </button>

        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        
        <button
          className="dsmovie-pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <ArrowNext />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
