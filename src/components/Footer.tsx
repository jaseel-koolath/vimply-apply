import { Box, Container, Typography } from '@mui/material'

import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Vimply Apply
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Created with 💖 by Vimal Enterprises
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
