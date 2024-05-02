import { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { Text } from '../text';

type TopAppBarProps = {
  type: 'center-aligned';
  title: string;
  renderLeadingComponent?: () => ReactNode;
  renderTrailingComponent?: () => ReactNode;
};

export const TopAppBar: FC<TopAppBarProps> = ({
  title,
  renderLeadingComponent,
  renderTrailingComponent,
}) => {
  return (
    <View className="bg-surface h-[64] flex-row w-full">
      {renderLeadingComponent?.()}
      <View className="w-full absolute h-full justify-center items-center">
        <Text type="title" size="large" className="text-on-surface">
          {title}
        </Text>
      </View>
      {renderTrailingComponent?.()}
    </View>
  );
};
