import agri from "../../public/ProjectsImage/agriv2.png";
import megacitycab from "../../public/ProjectsImage/megacitycab.png";
import AgriConnectv1 from "../../public/ProjectsImage/AgriConnectv1.jpg";
import bakeryimage from "../../public/ProjectsImage/bakeryimage.png";
import cafeimage from "../../public/ProjectsImage/cafeimage.png";
import dogfood from "../../public/ProjectsImage/dogfood.png";
import erpJava from "../../public/ProjectsImage/erpJava.png";
import blog from "../../public/ProjectsImage/blog.png";




const projectData = [
  {
    image: agri,
    title: "AgriConnect",
    description:
      "A digital platform for crop forecasting and price prediction in Sri Lanka, supporting farmers, traders, and government agencies with data-driven insights, real-time communication, and marketplace interactions.",
    techStack: [
      "React.js",
      "Redux",
      "Express.js",
      "PostgreSQL",
      "Flask",
      "Python",
      "XGBoost",
      "Optuna",
      "Firebase",
      "JWT",
    ],
    link: "https://github.com/nadila2k/AgriConnect-v2.git",
  },
  {
    image: megacitycab,
    title: "Mega City Cab System",
    description:
      "A digital solution to manage cab bookings in Colombo, automating customer registration, booking, billing, and driver management with secure access and a user-friendly experience.",
    techStack: [
      "React.js",
      "Spring Boot",
      "Java",
      "JWT",
      "Lombok",
      "PostgreSQL",
    ],
    link: "https://github.com/nadila2k/MegaCityCabClient", // frontend
    // Backend also available: "https://github.com/nadila2k/MegaCityCabApi"
  },
  {
    image: AgriConnectv1,
    title: "AgriHub",
    description:
      "A smart farming web application that reduces wastage and helps farmers make effective decisions about which crops to grow during different seasons.",
    techStack: [
      "React.js",
      "Redux",
      "Express.js",
      "React Router",
      "CSS",
      "PostgreSQL",
      "REST APIs",
    ],
    link: "https://github.com/nadila2k/agrihub-backend-api.git",
  },
  {
    image: blog,
    title: "Blog API",
    description:
      "A content management system for blogging, featuring image uploads via AWS S3, user engagement with likes and comments, and AI-powered content generation with OpenAI.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "AWS S3",
      "OpenAI API",
    ],
    link: "https://github.com/nadila2k/blog-api.git",
  },
  {
    image: dogfood,
    title: "DogApp",
    description:
      "A mobile application for dog lovers to find toys, food, vitamins, and share knowledge about dog care.",
    techStack: ["React.js", "React Native", "Firebase", "CSS"],
    link: "https://github.com/nadila2k/DogFoodApp.git",
  },
  {
    image: cafeimage,
    title: "Restaurant Booking System",
    description:
      "A web application for restaurant bookings, reservations, and beverage orders, built using pure PHP and MySQL.",
    techStack: ["PHP", "HTML5", "JavaScript", "JSON", "MySQL"],
    link: "https://github.com/nadila2k/TheGalleryCafe.git",
  },
  {
    image: erpJava,
    title: "HRM System",
    description:
      "A human resource management desktop application to manage employees, calculate salaries, and handle HR tasks.",
    techStack: ["Java", "JavaFX", "MySQL"],
    link: "https://github.com/nadila2k/Colombo-Institute-Employee-Management-System.git",
  },
  {
    image: bakeryimage,
    title: "Bakery Billing System",
    description:
      "A console application for a bakery, managing baking schedules, calculating prices, and listing items.",
    techStack: ["C++", "OOP"],
    link: "https://github.com/nadila2k/bakery_automated_billing_system.git",
  },
];

export default projectData;
