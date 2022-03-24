import SubMenu from "../SubMenu";

import Container from "./styles";

interface IProps {
  menuItem: string;
  subItems: { subItem1: string; subItems: string[] }[];
}

const MenuItem = ({ menuItem, subItems }: IProps) => {
  return (
    <Container selected={false}>
      <h3 className="menu-item">{menuItem}</h3>
      <div className="first-submenu">
        {subItems.map(({ subItem1, subItems }) => {
          return <SubMenu subItem={subItem1} subItems={subItems} />;
        })}
      </div>
    </Container>
  );
};

export default MenuItem;
