import { useAuth } from "@/context/AuthContext";
import { formatConversationDate } from "@/utils/FormatDate";
import axios from "axios";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Message from "./Message";

const CurrentConversation = ({
  currentConversation,
  setCurrentConversation,
}: any) => {
  const { authState } = useAuth();
  const { user: authenticatedUser } = authState || {};

  const [currentMessage, setCurrentMessage] = useState("");
  const [isMessageSending, setIsMessageSending] = useState(false);

  const messagesEndRef: any = useRef(null);

  const handleSendMessage = async () => {
    try {
      setIsMessageSending(true);
      const response = await axios.post(
        `/conversation/addMessage/${currentConversation?._id}/`,
        { content: currentMessage }
      );

      const newAddedMessage = response?.data?.data;

      setCurrentConversation((prevConversation: any) => {
        const updatedMessages = [...prevConversation.messages, newAddedMessage];
        return { ...prevConversation, messages: updatedMessages };
      });
      setIsMessageSending(false);
      setCurrentMessage("");
    } catch (error) {
      setIsMessageSending(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const updateSeen = async () => {
      console.log("updating seen");
      if (currentConversation) {
        try {
          await axios.put(`/conversation/${currentConversation?._id}/seen`);
        } catch (error) {
          console.log(error);
        }
      }
    };
    updateSeen();
  }, [currentConversation]);

  return (
    <ScrollView className="h-full">
      <View className="h-full bg-white">
        {currentConversation && (
          <View className="h-full flex items-start flex-col space-y-2">
            <View className="">
              <View className="flex items-center flex-row border-b border-gray-200 justify-start p-4 space-x-2">
                <View className="flex flex-row space-x-2 items-center">
                  <View className="">
                    <Image
                      source={{
                        uri: currentConversation?.users?.filter(
                          (user: any) => user._id !== authenticatedUser._id
                        )[0]?.image,
                      }}
                      alt=""
                      className="rounded-full object-cover w-10 h-10"
                      style={{ resizeMode: "contain" }}
                    />
                  </View>
                  <View className="flex-[10]">
                    <Text>
                      {
                        currentConversation?.users?.filter(
                          (user: any) => user._id !== authenticatedUser._id
                        )[0]?.name
                      }
                    </Text>
                    <Text
                      className="text-gray-400 text-[10px]"
                      numberOfLines={1}
                    >
                      {
                        currentConversation?.users?.filter(
                          (user: any) => user._id !== authenticatedUser._id
                        )[0]?.bio
                      }
                    </Text>
                  </View>
                  <View className="w-10 h-10 flex-[1]"></View>
                </View>
              </View>

              <View className="px-4 flex flex-col space-y-2">
                {currentConversation?.messages?.map(
                  (message: any, index: any) => {
                    const otherUser = currentConversation?.users.filter(
                      (user: any) => user._id !== authenticatedUser._id
                    )[0];

                    const currentUser =
                      authenticatedUser._id === message.senderId;

                    const showUserImage =
                      index === currentConversation.messages.length - 1 ||
                      currentConversation.messages[index + 1]?.senderId !==
                        message.senderId ||
                      new Date(message.createdAt).getDate() !==
                        new Date(
                          currentConversation.messages[index + 1]?.createdAt
                        ).getDate();

                    if (
                      new Date(message.createdAt).getDate() !==
                      new Date(
                        currentConversation?.messages[index - 1]?.createdAt
                      ).getDate()
                    ) {
                      return (
                        <View key={index} className="flex flex-col space-y-2">
                          <View className="items-center">
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <View className="flex-[1] h-[1px] bg-gray-200"/>
                              <View>
                                <Text
                                  style={{ textAlign: "center" }}
                                  key={index}
                                  className="text-center text-xs text-black font-semibold w-32 bg-gray-00 py-1 px-4 rounded-md"
                                >
                                  {formatConversationDate(message.createdAt)}
                                </Text>
                              </View>
                              <View className="flex-[1] h-[1px] bg-gray-200"/>
                            </View>
                          </View>

                          <View key={index} className="">
                            <Message
                              key={index}
                              currentUser={
                                message.senderId === authenticatedUser._id
                              }
                              message={message}
                              otherUser={otherUser}
                              showImage={showUserImage}
                            />

                            {showUserImage && (
                              <View
                                className={`flex justify-center ${
                                  currentUser
                                    ? "items-end"
                                    : "items-start"
                                }`}
                              >
                                <Image
                                  source={{
                                    uri: currentUser
                                      ? authenticatedUser.image
                                      : otherUser?.image,
                                  }}
                                  alt=""
                                  className="w-10 h-10 rounded-full"
                                  style={{ resizeMode: "contain" }}
                                />
                              </View>
                            )}
                          </View>
                        </View>
                      );
                    }

                    return (
                      <View key={index} className="">
                        <Message
                          key={index}
                          currentUser={
                            message.senderId === authenticatedUser._id
                          }
                          message={message}
                          otherUser={otherUser}
                          showImage={showUserImage}
                        />
                        {showUserImage && (
                          <View
                            className={`flex justify-center ${
                              currentUser
                                ? "items-end"
                                : "items-start"
                            }`}
                          >
                            <Image
                              source={{
                                uri: currentUser
                                  ? authenticatedUser.image
                                  : otherUser?.image,
                              }}
                              className="w-10 h-10 rounded-full"
                              style={{ resizeMode: "contain" }}
                              alt=""
                            />
                          </View>
                        )}
                      </View>
                    );
                  }
                )}
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CurrentConversation;
