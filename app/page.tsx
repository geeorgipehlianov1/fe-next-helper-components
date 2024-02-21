'use client'
import { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
export default function Page() {
  const [openBottom, setOpenBottom] = useState(false);

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

 
  return (
    <>
      <div className="flex items-center mt-20 flex-wrap gap-4">
        <Button placeholder={"Open Drawer Bottom"} onClick={openDrawerBottom}>Open Drawer Bottom</Button>
      </div>
      <Drawer
        placeholder={"Open Drawer Top"}
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography placeholder={"Open Drawer Top"} variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton
            placeholder={"Open Drawer Top"}
            variant="text"
            color="blue-gray"
            onClick={closeDrawerBottom}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography placeholder={"Open Drawer Top"} color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button  placeholder={"Open Drawer Top"}size="sm" variant="outlined">
            Documentation
          </Button>
          <Button placeholder={"Open Drawer Top"} size="sm">Get Started</Button>
        </div>
      </Drawer>
    </>
  );
}
