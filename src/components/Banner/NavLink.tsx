import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  id: number;
  to: string;
  page: string;
  handleCloseNavMenu: any;
  pagesLength: number;
  pages?: any;
}

const NavLink = ({
  id,
  to,
  pagesLength,
  page,
  handleCloseNavMenu,
  pages,
}: IProps) => {
  const [pg, setPg] = useState(false);

  const openDropDown = () => {
    setPg(true);
  };

  const closeDropDown = () => {
    setPg(false);
  };

  return (
    <React.Fragment>
      {pages ? (
        <Stack
          onMouseEnter={openDropDown}
          onMouseLeave={closeDropDown}
          sx={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Link
            to={pages ? "" : to}
            onClick={handleCloseNavMenu}
            style={{ textDecoration: "none" }}
          >
            <Stack flexDirection="row" sx={{ position: "relative" }}>
              {page}
              {pg ? <ExpandLess /> : <ExpandMore />}
            </Stack>
          </Link>
          {pg && (
            <Stack
              px={4}
              height={200}
              overflow="auto"
              py={2}
              gap={2}
              sx={{
                position: "absolute",
                top: 60,
                backgroundColor: "#091242 !important",
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                },
              }}
            >
              {pages.map((page: any) => (
                <Stack key={page.id} sx={{ "&>a": { p: 0 } }}>
                  <Link to={page.to} style={{ textDecoration: "none" }}>
                    {page.page}
                  </Link>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      ) : (
        <Link
          to={to}
          onClick={handleCloseNavMenu}
          style={{ textDecoration: "none" }}
        >
          <Stack flexDirection="row" sx={{ position: "relative" }}>
            {page}
          </Stack>
        </Link>
      )}

      {id !== pagesLength - 1 && (
        <Divider
          sx={{
            width: "1px",
            height: "18px",
            alignSelf: "center",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
      )}
    </React.Fragment>
  );
};
export default NavLink;
