import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Find recipes by name or ingredients</legend>
          <div className="input-field--inline">
            <label htmlFor="searchString">Search</label>
            <input
              type="text"
              name="searchString"
              id="searchString"
              value={this.props.searchOptions.searchString}
              onChange={this.props.onChange}
          />
          </div>
        </fieldset>
      </form>
    );
  }
}

SearchBox.propTypes = {
  searchOptions: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBox;
