import axios from 'axios';
import { Send } from 'lucide-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity, View } from 'react-native';

const ConversationInput = ({ currentConversation, setCurrentConversation }: any) => {
    const [message, setMessage] = useState("")

    const [isMessageSending, setIsMessageSending] = useState(false);

    const handleSendMessage = async () => {
        try {
            setIsMessageSending(true);
            const response = await axios.post(
                `/conversation/addMessage/${currentConversation?._id}/`,
                { content: message }
            );

            const newAddedMessage = response?.data?.data;

            setCurrentConversation((prevConversation: any) => {
                const updatedMessages = [...prevConversation.messages, newAddedMessage];
                return { ...prevConversation, messages: updatedMessages };
            });
            setIsMessageSending(false);
            setMessage("");
        } catch (error) {
            setIsMessageSending(false);
            console.log(error);
        }
    };

    return (
        <View className="absolute bottom-0 w-full blur-3xl bg-stone-100/50 shadow pb-2">
            <View className="h-12 mx-2 px-6 rounded-full flex items-center flex-row border border-gray-300 bg-white space-x-2">
                <TextInput value={message} onChange={(e) => setMessage(e.nativeEvent.text)} placeholder="Type a message..." className="w-full flex-[1]" />
                <TouchableOpacity onPress={handleSendMessage} disabled={isMessageSending || !message}>
                    <View className='px-1 flex flex-row'>
                        {isMessageSending ?
                            <ActivityIndicator size="small" color="black" />
                            :
                            <Send strokeWidth={1.5} size={24} className="text-black" />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ConversationInput