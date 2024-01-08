import classes from "./TabContent.module.css";

const TabContent = (props) => {
  return (
    <div className={classes.tab_content}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <pre>
        <code>{props.code}</code>
      </pre>
    </div>
  );
};

export default TabContent;
