import { useEffect, useState } from 'react';
import {
  CheckboxAndroidProps,
  Checkbox as NativeCheckbox,
} from 'react-native-paper';

const getToggledStatus = (
  oldStatus: CheckboxAndroidProps['status']
): CheckboxAndroidProps['status'] => {
  if (oldStatus === 'checked') return 'unchecked';

  return 'checked';
};

export const Checkbox = ({
  status,
  onPress,
  ...rest
}: CheckboxAndroidProps) => {
  const [componentStatus, setComponentStatus] = useState(status);

  useEffect(() => {
    status !== componentStatus && setComponentStatus(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handlePress: CheckboxAndroidProps['onPress'] = (event) => {
    setComponentStatus((_status) => {
      const toggledStatus = getToggledStatus(_status);
      onPress?.(event);
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
