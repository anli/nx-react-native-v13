import { FC, ReactNode } from 'react';
import { Appbar, AppbarProps } from 'react-native-paper';

type TopAppBarProps = Omit<AppbarProps, 'mode' | 'children'> & {
  variant: AppbarProps['mode'];
  title: string;
  LeadingComponent?: ReactNode;
  TrailingComponent?: ReactNode;
};

const TopAppBarComponent: FC<TopAppBarProps> = ({
  variant,
  title,
  LeadingComponent,
  TrailingComponent,
  ...rest
}) => (
  <Appbar.Header mode={variant} {...rest}>
    {LeadingComponent}
    <Appbar.Content title={title} />
    {TrailingComponent}
  </Appbar.Header>
);

export const TopAppBar = Object.assign(TopAppBarComponent, {
  BackAction: Appbar.BackAction,
  Action: Appbar.Action,
});
