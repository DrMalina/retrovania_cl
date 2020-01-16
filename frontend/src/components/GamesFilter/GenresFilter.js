import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const GenresFilter = ({ onGenreChange, initGenres = '' }) => {
  const genres = useSelector(state => state.games.genres);

  const genresOptions = genres.map(el => {
    return { value: el, label: el };
  });

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'transparent' }),
    option: styles => ({ ...styles, color: 'black' })
  };

  const handleChange = e => {
    onGenreChange(e);
  };

  const renderDefaultValues = genres => {
    if (!genres) return null;

    return genres
      .split(',')
      .map(genre => genresOptions.find(obj => obj.value === genre));
  };

  return (
    <Select
      name='genres'
      isMulti
      defaultValue={renderDefaultValues(initGenres)}
      options={genresOptions}
      placeholder='Pick a genre'
      closeMenuOnSelect={true}
      styles={colourStyles}
      onChange={handleChange}
    />
  );
};

export { GenresFilter };
