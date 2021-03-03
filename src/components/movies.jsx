import React, { Component } from 'react'
 import { getMovies} from './../services/fakeMovieService';

 class Movies extends Component {
     state = { 
         Movies: getMovies()
      };

    


     render() { 
         return(
             <table className="table">
                 <thead>
                     <tr>
                         <th>Title</th>
                         <th>Genre</th>
                         <th>Stock</th>
                         <th>Rate</th>
                         <th></th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.state.Movies.map(movie => (
                         <tr>
                         <td>{movie.title}</td>
                         <td>{movie.genre.name}</td>
                         <td>{movie.numberInStock}</td>
                         <td>{movie.dailyRentalRate}</td>
                         <td><button className="btn btn-danger btn-sm">Delete</button></td>
                     </tr>
                     ))}
                     
                 </tbody>
             </table>

         )
        
     }
 }
  
 export default Movies;