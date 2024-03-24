import { Typography, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function ErrorPage(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ textAlign: 'center', mt: 8 }}
    >
      <Box sx={{ my: 4 }}>
        <ErrorOutlineIcon
          sx={{ fontSize: 60, color: 'error.main' }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Something went wrong.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
        >
          The page you're looking for cannot be found.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ mt: 3 }}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;
