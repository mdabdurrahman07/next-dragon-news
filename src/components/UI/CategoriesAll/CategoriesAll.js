import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack } from "@mui/material";
import Link from "next/link";

const CategoriesAll = async () => {
  const { data: allCategories } = await getAllCategories();
  console.log(allCategories);
  return (
    <Box className="my-5 bg-gray-200 px-4 py-3">
      <h1 className="text-xl font-medium">Categories</h1>
      <Divider className="my-3" />
      <Stack spacing={2}>
        {allCategories.map((category) => (
          <Button variant="outlined" key={category} className="hover:bg-red-500 hover:text-white ">
            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoriesAll;
