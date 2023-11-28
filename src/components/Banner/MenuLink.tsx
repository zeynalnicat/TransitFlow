import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { MenuItem, Popover, Stack } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
  handleCloseNavMenu: () => void;
  page: string;
  pages: any;
  to: string;
}

const MenuLink = ({ handleCloseNavMenu, page, pages, to }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack>
      <MenuItem onClick={handleCloseNavMenu}>
        <Link
          to={pages? "" : to}
          style={{ textDecoration: "none" }}
          onMouseEnter={handleOpen}
        >
          <Stack flexDirection="row">
            {page}
            {pages && (!open ? <ChevronRight /> : <ChevronLeft />)}
          </Stack>
        </Link>
      </MenuItem>
      {pages && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Stack sx={{ backgroundColor: "white", p: 2 }}>
            {pages.map((page: any) => (
              <Link key={page.id} to={page.to} style={{ textDecoration: "none" }}>
                <MenuItem>{page.page}</MenuItem>
              </Link>
            ))}
          </Stack>
        </Popover>
      )}
    </Stack>
  );
};

export default MenuLink;
