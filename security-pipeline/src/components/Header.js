import React from "react";
import { Menu, Icon, Dropdown, Image } from "semantic-ui-react";
import "./Header.css";

const Header = () => {
  return (
    <Menu className="custom-header" fixed="top" inverted>
      <Menu.Item className="home-icon" header>
        <Icon name="home" size="large" />
      </Menu.Item>
      <Menu.Item header className="menu-item-survey">
        <Icon name="folder" size="large" />
        <span>Survey</span>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="search" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="bell outline" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="settings" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="question circle outline" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="rocket" />
        </Menu.Item>
        <Menu.Item>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            avatar
          />
        </Menu.Item>
        <Menu.Item>
          <Dropdown
            trigger={<Icon name="grid layout" size="large" />}
            icon={null}
          >
            <Dropdown.Menu>
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
              <Dropdown.Item>Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
