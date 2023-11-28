import icon from "../../assets/Icon.png";
import Image4 from "../../assets/Image.svg";
import Image2 from "../../assets/Image2.svg";
import Image3 from "../../assets/Image3.svg";
import Image5 from "../../assets/Image4.svg";
import Image from "../../assets/Photo.svg";
import "./module.css";
import { Box } from "@mui/material";
import BlogCard from "./BlogCard";
import Button from "../Button";


export interface BlogData {
  id: number;
  image: string;
  content: string;
  icon: string;
  title: string;
  date: string;
  month: string;
  specifications?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
  };
  blogLink: string;
}

const blogData: BlogData[] = [
  {
    id: 1,
    icon: icon,
    image: Image,
    title: "Inland freight a worthy solution for your business",
    content:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
    date: "08",
    month: "March",
    specifications: {
      first: "Urgent transport solutions",
      second: "Reliable & experienced staffs",
      third: "Transportation services",
      fourth: "Logistic management",
    },
    blogLink: "hvfdb"
  },
  {
    id: 2,
    icon: icon,
    image: Image2,
    title: "How technology can help redraw the supply chain map",
    content:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
    date: "12",
    month: "March",
    specifications: {
      first: "Urgent transport solutions",
      second: "Reliable & experienced staffs",
      third: "Transportation services",
      fourth: "Logistic management",
    },
    blogLink: "hvfdb",
  },
  {
    id: 3,
    icon: icon,
    image: Image3,
    title: "Five things you should have ready for your broker",
    content:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
    blogLink: "hvfdb",
    date: "25",
    month: "March",
    specifications: {
      first: "Urgent transport solutions",
      second: "Reliable & experienced staffs",
      third: "Transportation services",
      fourth: "Logistic management",
    },
  },
  {
    id: 4,
    icon: icon,
    image: Image4,
    title: "Four simple tips for becoming a healthier truck driver",
    blogLink: "hvfdb",
    content:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
    date: "28",
    month: "March",
    specifications: {
      first: "Urgent transport solutions",
      second: "Reliable & experienced staffs",
      third: "Transportation services",
      fourth: "Logistic management",
    },
  },
  {
    id: 5,
    icon: icon,
    image: Image5,
    title: "What Is The Role Of A Logistics Operations Manager",
    blogLink: "hvfdb",
    content:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
    date: "30  ",
    month: "March",
    specifications: {
      first: "Urgent transport solutions",
      second: "Reliable & experienced staffs",
      third: "Transportation services",
      fourth: "Logistic management",
    },
  },
];

function BlogCardSection({ limit = false }: any) {
  return (
    <>
      <Box className="title">
        <div className="oubl">Our blog</div>
        <div className="oln">Our Latest News</div>
      </Box>
      {blogData.slice(0, limit ? 3 : blogData.length).map((item: any) => (<BlogCard key={item.id} {...item} />))}
      {limit && <div style={{ textAlign: 'center' }}> <Button title="More Blog" isPrimary={false} /> </div>}
    </>
  );
}

export default BlogCardSection;
