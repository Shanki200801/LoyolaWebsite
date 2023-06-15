export default function handler(req, res){
    res.status(200).json(
 [
    {
      id: 1,
      image: "/carousel1.jpg",
      message: "carousel image 1",
    },
    {
      id: 2,
      image: "/carousel2.jpg",
      message: "carousel image 2",
    },
    {
      id: 3,
      image: "/carousel3.jpg",
      message: "carousel image 3",
    },
    {
      id: 4,
      image: "/carousel4.jpg",
      message: "carousel image 4",
    },
    {
      id: 5,
      image: "/carousel5.jpg",
      message: "carousel image 5",
    },
  ]);
}