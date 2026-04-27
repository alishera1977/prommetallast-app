import { Stack } from 'expo-router';
import Colors from '@/constants/colors';

export default function EstimateLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.bg },
        headerTintColor: Colors.text,
        headerTitle: 'Оценить лом',
        headerTitleStyle: { fontWeight: '700' },
      }}
    />
  );
}
