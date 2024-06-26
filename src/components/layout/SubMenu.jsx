import { DownOutlined, SmileOutlined, RedditOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: (
      <Link to="/Personajes" className='text-lg' >Personajes</Link>
      
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/category/Human" className='text-lg'>Humanos  <SmileOutlined /></Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="/category/Alien" className='text-lg'>Aliens <RedditOutlined /></Link>
      
    ),
  },
];
const SubMenu = () => (
  <Dropdown  
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space >
        Rick and Morty
        <DownOutlined/>
      </Space>
    </a>
  </Dropdown>
);
export default SubMenu;
