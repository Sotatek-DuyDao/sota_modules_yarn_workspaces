import { Button } from 'antd';
import { ButtonHTMLType, ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';

export interface ICoreButtonProps {
  text: string;
  type?: ButtonType;
  size?: SizeType;
  htmlType?: ButtonHTMLType;
  danger?: boolean;
  onClick?: () => void;
}

const CoreButton = ({ text, type, size, htmlType, danger, onClick }: ICoreButtonProps) => {
  return (
    <Button
      onClick={onClick}
      style={{ width: '100%' }}
      type={type || 'primary'}
      size={size || 'middle'}
      danger={danger ?? false}
      htmlType={htmlType || 'button'}
    >
      {text}
    </Button>
  );
};
export default CoreButton;
