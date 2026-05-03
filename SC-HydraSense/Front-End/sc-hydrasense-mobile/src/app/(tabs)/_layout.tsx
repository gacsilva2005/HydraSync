// src/app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { theme } from '../../global/themas';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Esconde aquele cabeçalho feio padrão no topo
        tabBarActiveTintColor: theme.colors.primary, // Vermelho quando clicado
        tabBarInactiveTintColor: theme.colors.textLight, // Cinza quando inativo
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.bodyBold,
          fontSize: 10,
        }
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'DASHBOARD',
          tabBarIcon: ({ color }) => <Feather name="grid" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="hydration"
        options={{
          title: 'HYDRATION',
          tabBarIcon: ({ color }) => <FontAwesome5 name="tint" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="performance"
        options={{
          title: 'PERFORMANCE',
          tabBarIcon: ({ color }) => <FontAwesome5 name="bolt" size={20} color={color} />,
        }}
      />
      
    </Tabs>
  );
}