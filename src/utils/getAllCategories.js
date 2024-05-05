export const getAllCategories = async () => {
  const res = await fetch(
    "https://the-news-portal-server.vercel.app/categories", {cache:"no-store"}
  );
  return res.json();
};
