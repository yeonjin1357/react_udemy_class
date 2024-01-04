import classes from "./Header.module.css";
import ReactImg from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header className={classes.header}>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
};

export default Header;
