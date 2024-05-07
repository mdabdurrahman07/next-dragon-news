export const getAllNews = async () => {
    const res = await fetch("https://the-news-portal-server.vercel.app/news?category=all-news" , {
        next:{
            revalidate: 30
        },
    })
    return res.json()

}