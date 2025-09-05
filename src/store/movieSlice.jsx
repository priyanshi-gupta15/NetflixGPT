import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    loading: false,
    error: null,
    // Add other state properties as needed
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setPopular: (state, action) => {
      state.movies = action.payload;
    },
    setTopRated: (state, action) => {
      state.genres = action.payload;
    },
    setUpComing: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setNowPlayingMovies,
  setPopular,
  setTopRated,
  setUpComing,
  setLoading,
  setError,
} = movieSlice.actions;
export default movieSlice.reducer;