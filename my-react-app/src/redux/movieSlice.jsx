import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (query, thunkAPI) => {
        try {
            const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
            if (res.data.Response === 'True') {
                return res.data.Search;
            } else {
                return thunkAPI.rejectWithValue(res.data.Error || 'No movies found.');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload || [];
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default movieSlice.reducer;
