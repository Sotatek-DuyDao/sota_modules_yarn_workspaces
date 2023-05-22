import { Space } from 'antd';
import style from './style.module.scss';
export interface IHeaderProps {
  title: string;
  subtitle?: string;
}
const Header = ({ title, subtitle }: IHeaderProps) => {
  return (
    <Space direction="vertical" align="center" className={style.wrapper}>
      <div>ICON</div>
      <div className={style.headerTitle}>{title}</div>
      {subtitle && <div className={style.subTitle}>{subtitle}</div>}
    </Space>
  );
};
export default Header;
