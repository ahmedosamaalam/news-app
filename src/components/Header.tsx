import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { MUIWrapperContext } from "../Wrapper";
import { useTranslation } from "react-i18next";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { MUILocaleData, supportedLocales } from "../SupportedLocales";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const theme = useTheme();
  const { locale, setLocale, toggleColorMode } =
    React.useContext(MUIWrapperContext);

  const { i18n } = useTranslation();

  const changeLanguage = (l: MUILocaleData) => {
    setLocale(l);
    i18n.changeLanguage(l.lang);
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News App
          </Typography>

          <Box sx={{ minWidth: 60, color: "inherit" }}>
            <IconButton
              aria-label="Example"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <LanguageIcon />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {supportedLocales.map((item) => {
                return (
                  // @ts-ignore - necessary to load object into value
                  <MenuItem
                    key={item.title}
                    onClick={() => changeLanguage(item)}
                    value={item}
                  >
                    {item.title}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <IconButton
            sx={{ fontSize: "1.5rem" }}
            onClick={toggleColorMode}
            color="inherit"
            disableTouchRipple
            disableRipple
          >
            {theme.palette.mode === "dark" ? (
              <span role="img" aria-label="sun">
                ☀️
              </span>
            ) : (
              <span role="img" aria-label="moon">
                🌚
              </span>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
