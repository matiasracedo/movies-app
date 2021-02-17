import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addMovieFavorite, getMovies } from '../../actions/index.js';
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form className="example" onSubmit={(e) => {
          this.handleSubmit(e);
          //this.setState({ title: '' }); //Ver esta línea, borra el estado para que el value del input desaparezca.
          }}>  
          <input 
          type="text" 
          placeholder="Search.." 
          id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
        {/*<form className="form-container" onSubmit={(e) => {
          this.handleSubmit(e);
          //this.setState({ title: '' }); //Ver esta línea, borra el estado para que el value del input desaparezca.
          }}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>*/}
        <div className='list-container'>
         {this.props.movies ? this.props.movies.map(movie =>
         <div className="movies-list">
          <div className='movie-link'>
            <NavLink className='movie-link' to={`/movie/${movie.imdbID}`}>
              {movie.Title}
            </NavLink>
          </div>
          <button className='fav-button' onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>
            Fav
          </button>
         </div>) : null}
         </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);