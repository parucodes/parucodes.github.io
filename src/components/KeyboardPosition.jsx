import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

const keyMap = {
  'q': 'Q', 'w': 'W', 'e': 'E', 'r': 'R', 't': 'T', 'y': 'Y', 'u': 'U', 'i': 'I', 'o': 'O', 'p': 'P',
  'a': 'A', 's': 'S', 'd': 'D', 'f': 'F', 'g': 'G', 'h': 'H', 'j': 'J', 'k': 'K', 'l': 'L',
  'z': 'Z', 'x': 'X', 'c': 'C', 'v': 'V', 'b': 'B', 'n': 'N', 'm': 'M', ' ': 'Space'
};

const KeyboardPosition = ({ word, typedWord }) => {
  const nextLetter = typedWord.length >= word.length ? " " : word[typedWord.length];
  const highlightKey = nextLetter === " " ? 'Space' : keyMap[nextLetter.toLowerCase()];

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={1} justifyContent="center">
        {['qwertyuiop', 'asdfghjkl', 'zxcvbnm '].map((row, rowIndex) => (
          <Grid container item key={rowIndex} spacing={1} justifyContent="center">
            {row.split('').map(key => (
              <Grid item key={key}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    width: key === ' ' ? 200 : 40, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    bgcolor: highlightKey === keyMap[key.toLowerCase()] ? 'yellow' : 'white'
                  }}
                >
                  {keyMap[key.toLowerCase()]}
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyboardPosition;
