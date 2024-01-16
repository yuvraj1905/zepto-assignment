import { imageCdnUrl } from "../utils/utils";
const usersData = [
  {
    name: "Yuvraj",
    email: "yuvrajkumar2509@gmail.com",
    pictureUrl:
      "https://res.cloudinary.com/yuvraj1905/image/upload/v1705399679/IMG_4569_aazwci.jpg",
  },
  {
    name: "Alice",
    email: "alice@example.com",
    pictureUrl: imageCdnUrl + "100x100/?portrait",
  },
  {
    name: "Bob",
    email: "bob@example.com",
    pictureUrl: imageCdnUrl + "101x101/?nature",
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    pictureUrl: imageCdnUrl + "102x102/?technology",
  },
  {
    name: "David",
    email: "david@example.com",
    pictureUrl: imageCdnUrl + "103x103/?architecture",
  },
  {
    name: "Eva",
    email: "eva@example.com",
    pictureUrl: imageCdnUrl + "104x104/?travel",
  },
];

export default usersData;
