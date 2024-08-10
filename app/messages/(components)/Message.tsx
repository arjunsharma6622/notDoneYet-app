import { formatMessageTime } from "@/utils/FormatDate";
import { CheckCheck } from "lucide-react-native";
import { Text, View } from "react-native";

const Message = ({
  message,
  currentUser,
}: any) => {
  return (
    <View
      key={message._id}
      className={` flex ${currentUser ? 'items-end' : "items-start"}`}
    >
      <View
        className={`${currentUser ? "" : "flex-row-reverse"
          }  flex items-start gap-3`}
      >
        <View
          className={`flex flex-col space-y-1 ${currentUser ? "items-end" : "items-start"
            }`}
        >
          <View
            className={`max-w-xl rounded-xl flex relative text-sm items-center ${currentUser ? 'rounded-br-none bg-gray-100' : 'rounded-bl-none bg-red-100'
              } py-2 px-4 `}
          >
            <View>
              <Text>{message?.content}</Text>
            </View>
          </View>
<View className="flex flex-row space-x-2">
<Text className="text-[10px] text-gray-500">
            {formatMessageTime(message?.createdAt)}
          </Text>
          {message.seen && currentUser && (
                <View className="items-end">
                  <CheckCheck size={12} className=" text-blue-500" />
                </View>
              )}
              {!message.seen && currentUser && (
                <View className="items-end">
                  <CheckCheck size={12} className=" text-gray-400" />
                </View>
              )}
          </View>
        </View>
      </View>
    </View>
  )};

export default Message;