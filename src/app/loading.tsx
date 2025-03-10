import CircularProgress from '@mui/material/CircularProgress';

const CommonLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CircularProgress size="5rem"
        sx={{ color: "primary.light" }} />
    </div>
  );
};

export default CommonLoader;
