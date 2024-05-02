import clsx from 'clsx';
import { FC } from 'react';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

type TextProps = NativeTextProps & {
  type: 'display' | 'headline' | 'title' | 'body' | 'label';
  size: 'large' | 'medium' | 'small';
};

const getClassName = ({ type, size }: Pick<TextProps, 'type' | 'size'>) => {
  if (type === 'title' && size === 'large') {
    return clsx(
      'font-titleLarge',
      'text-titleLarge',
      'leading-titleLarge',
      'tracking-titleLarge'
    );
  }
  return;
};

export const Text: FC<TextProps> = ({
  type,
  size,
  children,
  className,
  ...rest
}) => {
  return (
    <NativeText
      {...rest}
      className={clsx(getClassName({ type, size }), className)}
    >
      {children}
    </NativeText>
  );
};
