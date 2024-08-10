import Header from "@/components/Header";
import { userData } from "@/utils/utils";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { HeartPulse, Home, MapPinned, UsersRound } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 1 }}>
      {icon}
      <Text
        style={{
          fontSize: 12,
          color: color,
          fontWeight: focused ? "600" : "400",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
    <Header/>
    <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1A59EA",
          tabBarInactiveTintColor: "#9CA3AF",
          tabBarShowLabel: false,
          tabBarStyle: {
            // backgroundColor: "#",
            // borderTopWidth: 1,
            // borderTopColor: "#232533",
            height: 64,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<Home color={color} strokeWidth={1.5} />}
                name="Home"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="network"
          options={{
            title: "Network",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<UsersRound color={color} strokeWidth={1.5} />}
                name="Network"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="doctors"
          options={{
            title: "Doctors",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<HeartPulse color={color} strokeWidth={1.5} />}
                name="Doctors"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="venues"
          options={{
            title: "Venues",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<MapPinned color={color} strokeWidth={1.5} />}
                name="Venue"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<UserRound color={color} strokeWidth={1.5}/>}
              name="Profile"
              color={color}
              focused={focused}
            />
          ),
        }}
      /> */}
      </Tabs>
      <StatusBar backgroundColor="" style='light' />
    </>

  );
};

export default TabsLayout;