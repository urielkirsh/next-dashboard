import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { useSession, signOut, signIn } from 'next-auth/react'
import { useMediaQuery, useTheme } from '@mui/material';
import NextLink from 'next/link'

export type HeaderProps = { ColorModeContext: React.Context<{toggleColorMode: () => void;}>}
const Header = (props: HeaderProps) => {
  const { ColorModeContext } = props  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { data: session } = useSession()
  const userProfileImg = session?.user?.image as string
  const theme = useTheme()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const tabletCheck = useMediaQuery('(min-width: 768px)')

  return (
    <AppBar position="sticky" sx={{ marginBottom: '40px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Data-Dash
          </Typography>
          {tabletCheck && (
            <Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
                {session && <Typography>Signed in as {session?.user?.email}</Typography>}
            </Box>
          )}
          <ThemeToggleButton ColorModeContext={ColorModeContext}/>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={session?.user?.name as string} src={userProfileImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuItem onClick={() => session ? signOut() : signIn()}>
                <Typography textAlign="center">{session ? 'Logout' : 'Login'}</Typography>
            </MenuItem>
            <MenuItem>
                <NextLink
                  href={'/dashboard/profile'}
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: 'none'
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </NextLink>
            </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;