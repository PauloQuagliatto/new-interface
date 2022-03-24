import Container from "./styles";

interface IProps {
  subItem: string;
  subItems: string[];
}

const SubMenu = ({ subItem, subItems }: IProps) => {
  return (
    <Container selected={true}>
      <h3>{subItem}</h3>
      <div className="last-submenu">
        {subItems.map((subItem2) => {
          return <h3>{subItem2}</h3>;
        })}
      </div>
    </Container>
  );
};

export default SubMenu;
