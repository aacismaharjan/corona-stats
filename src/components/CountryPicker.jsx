import React, { useState, useEffect } from "react";
import { fetchCountries } from "../api";

import { makeStyles } from "@material-ui/core/styles";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "40%",
    minWidth: "300px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
}));

const CountryPicker = ({ data: { handleCountryChange, country } }) => {
  const [countries, setCountries] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchCountries());
    };

    getCountries();
  }, []);

  return (
    <div className={classes.center}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
          label="Country Picker"
          className={{ minWidth: 280 }}
        >
          <MenuItem value="">
            <em>Global</em>
          </MenuItem>

          {countries.length &&
            countries.map((country, index) => (
              <MenuItem key={index} value={country}>
                {country}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
