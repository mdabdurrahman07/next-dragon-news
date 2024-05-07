import {
  Box,
 
  Card,
 
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import nationalNews from "@/assets/national-news-top.png";
import Image from "next/image";
import NewsCard from "./NewsCard";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
  const {data} = await getAllNews()
  console.log(data[0])
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={data[0].thumbnail_url} width={800} height={500} alt="top-news"></Image>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {data[0].title}
            </Typography>
            <Typography gutterBottom className="my-5">
              By {data[0].author.name} - {data[0]?.author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data[0]?.details.length > 200
                      ? data[0]?.details.slice(0, 200) + "..."
                      : data[0]?.details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <hr className="my-10"/>

    <NewsCard/>
    </Box>
  );
};

export default LatestNews;
