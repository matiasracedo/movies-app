import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <div className='title'>
          <h4>Películas Favoritas</h4>
        </div>
        <ul className='list-container'>
          {this.props.movies.map(movie =>
         <div className="movies-list">
          <div>
            <Link className='movie-link' to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </div>
          <button className='delete-button' onClick={() => this.props.removeMovieFavorite(movie)}>
            X
          </button>
         </div>)}
        </ul>
      </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
