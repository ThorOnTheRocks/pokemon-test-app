import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loader(): React.JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
