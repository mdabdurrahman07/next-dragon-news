import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import nationalNews from "@/assets/national-news-top.png";
import { getAllNews } from "@/utils/getAllNews";

const NewsCard = async () => {
  const {data} = await getAllNews()
  return (
    <Box className="my-5">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {data.slice(0,4).map((news) =>
        <Grid item xs={6}  key={news._id}>
           <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={news.thumbnail_url} width={500} height={200} alt="top-news"></Image>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {news.title}
                </Typography>
                <Typography gutterBottom className="my-5">
                  By {news.author.name} - {news.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {news?.details.length > 200
                      ? news?.details.slice(0, 200) + "..."
                      : news?.details}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )}
      </Grid>
    </Box>
  );
};

export default NewsCard;
