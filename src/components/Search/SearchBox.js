import React, {PropTypes} from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Find recipes by name or ingredients</legend>
          <label htmlFor="searchString">Search</label>
          <input
            type="text"
            name="searchString"
            id="searchString"
            value={this.props.searchOptions.searchString}
            onChange={this.props.onChange}
          />
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
