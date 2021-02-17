import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';


import './Movie.css';


class Movie extends React.Component {
    
    componentDidMount() {
        const { match: { params: { id }}} = this.props;
        this.props.getMovieDetail(id)
        console.log(this.props.movies)
    }

    render() {
        return (
            <div className="container">
              <div className="movie-card">
              <h2 className="title">
                {this.props.movies.Title}
                <span>{this.props.movies.Rated}</span>
                <p className="description">{this.props.movies.Year}</p>
              </h2>
              <p className="details description">{this.props.movies.Plot}</p>
              </div>
              <div className="container2">
                <div className="img">
                  <img src={this.props.movies.Poster}></img>
                </div>
                <div className="column description">
                  <ul>
                    <p>Director: {this.props.movies.Director}</p>
                    <p>Actors: {this.props.movies.Actors}</p>
                    <p>Awards: {this.props.movies.Awards}</p>
                    <p>Genre: {this.props.movies.Genre}</p>
                    <p>Language: {this.props.movies.Language}</p>
                    <p>Runtime: {this.props.movies.Runtime}</p>
                    <p>IMDb Rating: {this.props.movies.imdbRating}</p>
                  </ul>
                </div>
              </div>  
            </div>
        );
    }
}

/*Actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans"
Awards: "Nominated for 1 Oscar. Another 46 wins & 73 nominations."
BoxOffice: "N/A"
Country: "USA"
DVD: "N/A"
Director: "Anthony Russo, Joe Russo"
Genre: "Action, Adventure, Sci-Fi"
Language: "English"
Metascore: "68"
Plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
Production: "Marvel Studios"
Rated: "PG-13"
Ratings: (3) [{…}, {…}, {…}]
Released: "27 Apr 2018"
Response: "True"
Runtime: "149 min"
Title: "Avengers: Infinity War"
Type: "movie"
Website: "N/A"
Writer: "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)"
Year: "2018"
imdbID: "tt4154756"
imdbRating: "8.4"
imdbVotes: "805,496"*/

function mapStateToProps(state) {
    return {
      movies: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getMovieDetail: id => dispatch(getMovieDetail(id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);