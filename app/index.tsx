import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { authState, isLoading } = useAuth();
  const { accessToken, authenticated, user } = authState || {};

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {(accessToken && authenticated && user) ? (
            <Redirect href="/messages" />
          ) : (
            <Redirect href="/signin" />
          )}
        </View>
      )}
    </View>
  );
}
