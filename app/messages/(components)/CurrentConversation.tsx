import { useAuth } from "@/context/AuthContext";
import { formatConversationDate } from "@/utils/FormatDate";
import axios from "axios";
import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import ConversationHeader from "./ConversationHeader";
import ConversationInput from "./ConversationInput";
import Message from "./Message";

const CurrentConversation = ({
  currentConversation,
  setCurrentConversation,
  scrollViewRef
}: any) => {
  const { authState } = useAuth();
  const { user: authenticatedUser } = authState || {};



  useEffect(() => {
    const updateSeen = async () => {
      console.log("updating seen");
      if (currentConversation) {
        try {
          await axios.patch(`/conversation/${currentConversation?._id}/seen`);
        } catch (error) {
          console.log(error);
        }
      }
    };
    updateSeen();
  }, [currentConversation]);


  return (
    <View className="h-full bg-stone-100">
      {currentConversation && (
        <View className="relative h-full flex items-start flex-col space-y-0">
          <ConversationHeader currentConversation={currentConversation} authenticatedUser={authenticatedUser} />

          <ScrollView ref={scrollViewRef} className='w-full mb-12'>
            <View className="px-8 flex flex-col space-y-2 mb-4">
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
                            <View className="flex-[1] h-[1px] bg-gray-200" />
                            <View>
                              <Text
                                style={{ textAlign: "center" }}
                                key={index}
                                className="text-center text-xs text-gray-400 font-normal w-32 bg-gray-00 py-1 px-4 rounded-md"
                              >
                                {formatConversationDate(message.createdAt)}
                              </Text>
                            </View>
                            <View className="flex-[1] h-[1px] bg-gray-200" />
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
                              className={`flex justify-center ${currentUser
                                  ? "items-end -mr-5"
                                  : "items-start -ml-5"
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
                          className={`flex justify-center ${currentUser
                              ? "items-end -mr-5"
                              : "items-start -ml-5"
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
          </ScrollView>

          <ConversationInput  currentConversation={currentConversation} setCurrentConversation={setCurrentConversation}/>
        </View>
      )}
    </View>
  );
};

export default CurrentConversation;
