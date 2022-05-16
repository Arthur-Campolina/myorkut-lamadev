import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearch = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const StyledIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const StyledUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Arthur's Orkut
        </Typography>
        <DiamondIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <StyledSearch>
          <InputBase placeholder="search..." />
        </StyledSearch>
        <StyledIcons>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Notifications />
          </Badge>
          <StyledUserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              onClick={(e) => setOpen(true)}
            />
          </StyledUserBox>
        </StyledIcons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;
