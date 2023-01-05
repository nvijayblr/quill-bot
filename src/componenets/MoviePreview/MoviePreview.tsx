import React, { FC } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./MoviePreview.scss";

const MoviePreview: FC<any> = ({ movie = {} }) => {
  return (
    <div className="movie-preview-wrapper">
      <div className="movie-preview">
        <ImageListItem>
          <img
            className="poster"
            src={movie.Poster}
            srcSet={movie.Poster}
            alt={movie.Title}
            loading="lazy"
          />
        </ImageListItem>
        <Box className="movie-details">
          <Typography variant="h4" gutterBottom>
            {movie.Title}
          </Typography>
          <div className="movie-info-imdb">
            <div className="progress-bg">
              <div
                className="progress"
                style={{ width: parseFloat(movie.imdbRating) * 10 }}
              ></div>
            </div>
            <Typography variant="subtitle1" className="title">
              {movie.imdbRating}/10
            </Typography>
          </div>
          <Box className="movie-info">
            <Typography variant="subtitle1" className="title">
              Year
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {movie.Year}
            </Typography>
          </Box>
          <Box className="movie-info">
            <Typography variant="subtitle1" className="title">
              Running Time
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {movie.Runtime}
            </Typography>
          </Box>
          <Box className="movie-info">
            <Typography variant="subtitle1" className="title">
              Directed by
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {movie.Director}
            </Typography>
          </Box>
          <Box className="movie-info">
            <Typography variant="subtitle1" className="title">
              Language
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {movie.Language}
            </Typography>
          </Box>
          <Box className="movie-info">
            <Typography variant="subtitle1" className="desc">
              {movie.Plot}
            </Typography>
          </Box>
          <Stack spacing={2} direction="row" className="play-trailer-btns">
            <Button variant="contained" className="btn-primary">
              Play Movie
            </Button>
            <Button variant="outlined" className="btn-secondary">
              Watch Trailer
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default MoviePreview;
