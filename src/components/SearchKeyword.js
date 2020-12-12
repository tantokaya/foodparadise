import React from "react";

const SearchKeyword = (props) => (
  <>
    <h5>Keyword</h5>
    <div className="card">
      <div className="card-body">
        <div className="form-row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Type keyword i.e: restaurant's name, location, cuisione, etc."
              value={props.keyword}
              onChange={props.changeKeywordHandler}
            />
          </div>
          <div className="col">
            <button
              onClick={props.onClickAddToCriteria}
              className="btn btn-primary"
              type="button"
            >
              Add to criteria
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SearchKeyword;
