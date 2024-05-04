import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import nationalNews from "@/assets/national-news-top.png";

const Sidebar = () => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={nationalNews} alt="top-news"></Image>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-5">
              By Abdur Rahman - Mar 18 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Sidebar;
