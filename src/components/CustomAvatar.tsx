interface CustomAvatarProps {
  fallback: string;
  backgroundColor: string;
  color: string;
  size?: '1' | '2' | { initial: '1' | '2'; md?: '1' | '2' };
  className?: string;
  style?: React.CSSProperties;
}

const CustomAvatar = ({
  fallback,
  backgroundColor,
  color,
  size = '1',
  className = '',
  style = {}
}: CustomAvatarProps) => {
  const getSizeStyles = (sizeValue: '1' | '2') => {
    const sizeMap = {
      '1': { width: '24px', height: '24px', fontSize: '12px' },
      '2': { width: '32px', height: '32px', fontSize: '14px' }
    };
    return sizeMap[sizeValue];
  };

  let sizeStyles: { width: string; height: string; fontSize: string } = {
    width: '24px',
    height: '24px',
    fontSize: '12px'
  };

  if (typeof size === 'string') {
    sizeStyles = getSizeStyles(size);
  } else {
    sizeStyles = getSizeStyles(size.initial);
  }

  return (
    <div
      className={`
        rounded-full 
        flex 
        items-center 
        justify-center 
        font-bold 
        border 
        border-white
        flex-shrink-0
        ${className}
      `}
      style={{
        width: sizeStyles.width,
        height: sizeStyles.height,
        fontSize: sizeStyles.fontSize,
        backgroundColor,
        color,
        ...style
      }}
    >
      {fallback}
    </div>
  );
};

export default CustomAvatar;
