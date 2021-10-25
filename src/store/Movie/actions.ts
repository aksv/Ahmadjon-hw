import { MOVIE_ERROR, MOVIE_SUCCESS, MOVIE_LOADING  } from './actionTypes';
import { IMovieSuccess, IMovieSuccessPayload, MovieDispatchTypes } from './types';
import {Dispatch} from 'redux';
import axios from '../../utils/axios';
 

export const GetMovies = () => async (dispatch:Dispatch<MovieDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIE_LOADING
        })

        const res: any = await axios.get(`/movie`)

        dispatch({
            type: MOVIE_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
        dispatch({
            type: MOVIE_ERROR
        })
    }
}