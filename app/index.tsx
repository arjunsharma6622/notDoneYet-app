import FormButton from "@/components/ui/FormButton";
import { useAuth } from "@/context/AuthContext";
import { Redirect, router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { authState, isLoading } = useAuth();
  const { accessToken, authenticated, user } = authState || {};

  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {(accessToken && authenticated && user) ? (
              <Redirect href="/home" />
            ) : (
              <View className="flex flex-col items-center justify-between py-6 px-4 h-full">
                <View className="flex flex-col items-center justify-center">
                  <Image resizeMode="contain" source={require("@/assets/images/logo-small.png")} className="w-20 h-20 aspect-auto" />
                  <Image resizeMode="contain" className="w-[350px] h-[400px] aspect-auto" source={require("@/assets/images/network_wheel.png")} />
                </View>
                <View className="mb-6 w-full flex flex-col items-center justify-center">
                  <FormButton containerStyles="h-12 w-[90%]" textStyles="text-base" title="Sign In" handlePress={() => router.navigate("/signin")} />
                  <FormButton containerStyles="h-12 mt-4 w-[90%] bg-white border border-blue-500" textStyles="text-blue-500 text-base" title="Sign Up" handlePress={() => router.navigate("/signup")} />
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
