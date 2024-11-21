import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ReorderIcon from "@mui/icons-material/Reorder";
import Tooltip from "@mui/material/Tooltip";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link } from "react-scroll";
import LogoutIcon from "@mui/icons-material/Logout";

function More({ size }: { size: any }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeLink, setActiveLink] = React.useState<string>("home"); // Track active link
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetActive = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <React.Fragment>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            bgcolor: "transparent",
          }}
        >
          <Tooltip title="Account settings" className="">
            <IconButton
              onClick={handleClick}
              size="large"
              sx={{ mt: 0 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <ReorderIcon
                fontSize={size}
                className="w-[40px] text-white h-24"
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          style={{ padding: "0px" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          className=""
        >
          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="home"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("home");
              }}
              onSetActive={() => handleSetActive("home")}
            >
              <div className="flex w-[100%] justify-left sm:py-1">
                <HomeOutlinedIcon
                  className={
                    activeLink === "home" ? "text-black" : "text-[#585858]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${
                    activeLink === "home"
                      ? "text-black font-extrabold"
                      : "text-[#585858]"
                  }`}
                >
                  HOME
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="about"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("about");
              }}
              onSetActive={() => handleSetActive("about")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <GroupsOutlinedIcon
                  className={
                    activeLink === "about" ? "text-black" : "text-[#585858]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${
                    activeLink === "about"
                      ? "text-black font-extrabold"
                      : "text-[#585858]"
                  }`}
                >
                  ABOUT
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="services"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("services");
              }}
              onSetActive={() => handleSetActive("services")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <DevicesOutlinedIcon
                  className={
                    activeLink === "services" ? "text-black" : "text-[#585858]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${
                    activeLink === "services"
                      ? "text-black font-extrabold"
                      : "text-[#585858]"
                  }`}
                >
                  SERVICES
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="portfolio"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("portfolio");
              }}
              onSetActive={() => handleSetActive("portfolio")}
            >
              <div className="flex w-[100%] justify-around sm:py-4">
                <PublicOutlinedIcon
                  className={
                    activeLink === "portfolio" ? "text-black" : "text-[#585858]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${
                    activeLink === "portfolio"
                      ? "text-black font-extrabold"
                      : "text-[#585858]"
                  }`}
                >
                  PORTFOLIO
                </p>
              </div>
            </Link>
          </MenuItem>




          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("contact");
              }}
              onSetActive={() => handleSetActive("contact")}
            >
              <div className="flex w-[100%] sm:py-4">
                <PhoneOutlinedIcon
                  className={
                    activeLink === "contact" ? "text-black" : "text-[#585858]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${
                    activeLink === "contact"
                      ? "text-black font-extrabold"
                      : "text-[#585858]"
                  }`}
                >
                  CONTACT
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem  style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to=""
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
              }}
             
            >
              <div className="flex w-[100%]  sm:py-4">
                <LogoutIcon
                  className={
                    activeLink === "" ? "text-black" : "text-[#585858]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${
                    activeLink === ""
                      ? "text-black font-extrabold"
                      : "text-[#585858]"
                  }`}
                >
                  LOG OUT
                </p> 
              </div>
            </Link>
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default More;
