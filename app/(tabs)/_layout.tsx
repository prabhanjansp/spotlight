import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          backgroundColor: "#222",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
          height: 45,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <>
              <Ionicons name="home" size={size} color={color} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ size, color }) => (
            <>
              <Ionicons name="bookmark" size={size} color={color} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ size, }) => (
            <>
              <Ionicons name="add-circle" size={size} color={COLORS.primary} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ size, color }) => (
            <>
              <Ionicons name="notifications" size={size} color={color} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <>
              <Ionicons name="person" size={size} color={color} />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
