import React, { useState } from 'react';
import { Autocomplete, TextField, Popper, ListItem } from '@mui/material';
import { FixedSizeList } from 'react-window';

const VirtualizedAutocomplete = ({ options }) => {
  const [inputValue, setInputValue] = useState('');

  // Custom Popper component to use react-window for virtualization
  const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const { children, ...other } = props;

    const itemCount = Array.isArray(children) ? children.length : 0;
    const ITEM_SIZE = 36;

    return (
      <FixedSizeList
        height={250}
        width="100%"
        itemSize={ITEM_SIZE}
        itemCount={itemCount}
        outerElementType="div"
        innerElementType="ul"
        {...other}
      >
        {({ index, style }) => (
          <ListItem style={style} component="div" disablePadding>
            {children[index]}
          </ListItem>
        )}
      </FixedSizeList>
    );
  });

  return (
    <Autocomplete
      disableListWrap
      PopperComponent={Popper}
      ListboxComponent={ListboxComponent}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select an option"
          variant="outlined"
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      renderOption={(props, option, state) => [props, option]}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
    />
  );
};

export default VirtualizedAutocomplete;
