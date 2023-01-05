/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { debounceTime, tap, distinctUntilChanged } from "rxjs/operators";
import { Subject } from "rxjs";

import "./SearchMovie.scss";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { messageService } from "../../service/messageService";

const SearchMovie: FC<any> = ({ movie = {} }) => {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [onSearch$] = useState(() => new Subject());

  useEffect(() => {
    const subscription = onSearch$
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        tap((value) => {
          messageService.sendMessage({
            action: "SEARCH",
            data: value,
          });
        })
      )
      .subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="search-movie">
      <Stack spacing={2} direction="row" className="search-movie-wrapper">
        <Box
          className={`search-input-warapper ${showSearch ? "show" : "hide"}`}
        >
          <IconButton
            className="search-icon"
            onClick={() => {
              setShowSearch(true);
            }}
          >
            <SearchIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <TextField
            size="medium"
            type="text"
            autoComplete="off"
            fullWidth
            value={searchText}
            autoFocus={showSearch}
            placeholder="Title, Movies, Keyword"
            onChange={(e) => {
              onSearch$.next(e.target.value);
              setSearchText(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      onSearch$.next("");
                      setSearchText("");
                      setShowSearch(false);
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="search-input"
          />
        </Box>
        <Box className="settings">
          <IconButton>
            <SettingsOutlinedIcon sx={{ fontSize: 26 }} />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </Box>
      </Stack>
    </div>
  );
};

export default SearchMovie;
