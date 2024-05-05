import { useEffect, useState } from 'react';
import {
  CheckboxAndroidProps,
  Checkbox as NativeCheckbox,
} from 'react-native-paper';

type CheckboxProps = Omit<CheckboxAndroidProps, 'onPress'> & {
  onPress?: (value: CheckboxAndroidProps['status']) => void;
};

const getToggledStatus = (
  oldStatus: CheckboxAndroidProps['status']
): CheckboxProps['status'] => {
  if (oldStatus === 'checked') return 'unchecked';

  return 'checked';
};

export const Checkbox = ({ status, onPress, ...rest }: CheckboxProps) => {
  const [componentStatus, setComponentStatus] = useState(status);

  useEffect(() => {
    status !== componentStatus && setComponentStatus(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handlePress = () => {
    setComponentStatus((_status) => {
      const toggledStatus = getToggledStatus(_status);
      onPress?.(toggledStatus);
      return toggledStatus;
    });
  };

  return (
    <NativeCheckbox.Android
      status={componentStatus}
      onPress={handlePress}
      {...rest}
    />
  );
};
