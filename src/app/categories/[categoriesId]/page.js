import { getCategoriesNews } from "@/utils/getCategoriesNews";
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
import Link from "next/link";
import React from "react";

const DynamicCategories = async ({ searchParams }) => {
  const { data } = await getCategoriesNews(searchParams.category);
  return (
    <Box>
      <div className="my-3 space-y-3">
        <h1 className="text-2xl font-medium ">{searchParams.category}</h1>
        <div className="w-[18%] h-[3px] bg-red-500"></div>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="my-2">
        {data.map((news) => (
          <Grid key={news._id} item xs={6}>
           <Link href={`/${news.category}/${news._id}`}>
           <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    width={800}
                    height={100}
                    alt="top-news"
                  ></Image>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {news?.title.length > 30
                      ? news?.title.slice(0, 30) + "..."
                      : news?.title}
                  </Typography>
                  <Typography gutterBottom className="my-5">
                    By {news?.author?.name} - {news?.author?.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news?.details.length > 200
                      ? news?.details.slice(0, 200) + "..."
                      : news?.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
           </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicCategories;
