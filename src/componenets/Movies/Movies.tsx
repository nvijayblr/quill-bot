/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { messageService } from "../../service/messageService";
import movies from "./data/data.json";
import MoviePreview from "../MoviePreview/MoviePreview";
import SearchMovie from "../SearchMovie/SearchMovie";

import "./Movies.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#394B61",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
}));

const Movies: FC<any> = () => {
  const [moviesList, setMoveisList] = useState(movies);
  const [moviesListAll] = useState(movies);
  const [showPreview, setShowPreview] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  const filterMovies = (keyword: string) => {
    keyword = keyword.toLowerCase();
    const movies = moviesListAll.filter(
      (movie) =>
        movie.Title.toLowerCase().indexOf(keyword) >= 0 ||
        movie.Genre.toLowerCase().indexOf(keyword) >= 0 ||
        movie.Director.toLowerCase().indexOf(keyword) >= 0 ||
        movie.Plot.toLowerCase().indexOf(keyword) >= 0 ||
        movie.Language.toLowerCase().indexOf(keyword) >= 0 ||
        movie.Actors.toLowerCase().indexOf(keyword) >= 0
    );
    setMoveisList(movies);
  };

  useEffect(() => {
    const subscription = messageService.getMessage().subscribe((state: any) => {
      if (state.action === "HIDE_PREVIEW") {
        setShowPreview(false);
      }
      if (state.action === "SEARCH") {
        filterMovies(state.data);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Box className="movies-list">
      <SearchMovie />

      {showPreview && <MoviePreview movie={movieInfo} />}

      <Grid container spacing={"26px"} columns={{ xs: 20, sm: 20 }}>
        {moviesList.map((movie, index) => {
          return (
            <Grid xs={20} sm={10} md={4} key={`movie-item-${index}`}>
              <Item
                onClick={() => {
                  setShowPreview(true);
                  setMovieInfo(movie);
                }}
              >
                <ImageListItem>
                  <img
                    src={movie.Poster}
                    srcSet={movie.Poster}
                    alt={movie.Title}
                    loading="lazy"
                  />
                </ImageListItem>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="movie-title"
                >
                  {movie.Title}
                </Typography>
                <div className="btns-wrapper">
                  <PlayCircleFilledWhiteOutlinedIcon className="play-circle" />
                  <AddCircleOutlineOutlinedIcon />
                </div>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Movies;
