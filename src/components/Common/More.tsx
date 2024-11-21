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
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link } from "react-scroll";
import AddchartIcon from '@mui/icons-material/Addchart';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import "../../style/EntryPage.css"

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
          <Tooltip title="Account settings" >
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
          slotProps={{
            paper: {
              className: "header", // Add your custom class here
            },
          }}
          sx={{
            "& .MuiPaper-root": {

            },
          }}
        >

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full "
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
                    activeLink === "home" ? "text-[#bb324d]": "text-[#eee9e9]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "home"
                    ? "text-[#bb324d] font-extrabold"
                    : "text-[#FFFFFF]"
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
                <GroupsOutlinedIcon
                  className={
                    activeLink === "services" ? "text-[#bb324d]": "text-[#eee9e9]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "services"
                    ? "text-[#bb324d] font-extrabold"
                    : "text-[#FFFFFF]"
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
              to="qualification"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("qualification");
              }}
              onSetActive={() => handleSetActive("qualification")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <WorkOutlineOutlinedIcon
                  className={
                    activeLink === "qualification" ? "text-[#bb324d]": "text-[#eee9e9]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "qualification"
                    ? "text-[#bb324d] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  QUALIFICATION
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="projects"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("projects");
              }}
              onSetActive={() => handleSetActive("projects")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <DevicesOutlinedIcon
                  className={
                    activeLink === "projects" ? "text-[#bb324d]": "text-[#eee9e9]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "projects"
                    ? "text-[#bb324d] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  PROJECTS
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="skills"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("skills");
              }}
              onSetActive={() => handleSetActive("skills")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <AddchartIcon
                  className={
                    activeLink === "skills" ? "text-[#bb324d]": "text-[#eee9e9]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "skills"
                    ? "text-[#bb324d] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  SKILLS
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
                    activeLink === "contact" ? "text-[#bb324d]": "text-[#eee9e9]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "contact"
                    ? "text-[#bb324d] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  CONTACT
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
