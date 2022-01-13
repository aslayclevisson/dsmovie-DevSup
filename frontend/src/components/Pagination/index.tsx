import { ReactComponent as ArrowPrevious } from "assets/img/arrowPreviousIcon.svg";
import { ReactComponent as ArrowNext } from "assets/img/arrowNextIcon.svg";
import "./styles.css";

function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <ArrowPrevious />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <ArrowNext />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
