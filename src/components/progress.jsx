import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate(props) {
  return (
    <Box sx={{ width: '100%', position: 'absolute', bottom:'10px'}}>
      <LinearProgress color={props.color}/>
    </Box>
  );
}