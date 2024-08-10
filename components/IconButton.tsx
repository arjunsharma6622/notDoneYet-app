import { Pencil, PencilLine, Plus, PlusCircle, Trash2 } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface IconButtonProps {
    buttonType: 'edit' | 'delete' | 'add';
    onPress: () => void;
    styling?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ buttonType, onPress, styling = '' }) => {
    let IconComponent;

    switch (buttonType) {
        case 'edit':
            IconComponent = <PencilLine size={20} strokeWidth={1.5} className='text-gray-600'/>;
            break;
        case 'delete':
            IconComponent = <Trash2 size={20} strokeWidth={1.5} className='text-red-600'/>;
            break;
        case 'add':
            IconComponent = <Plus size={20} strokeWidth={1.5} className='text-blue-600'/>;
            break;
        default:
            IconComponent = <Pencil size={20} strokeWidth={1.5} className='text-gray-600'/>;
    }

    return (
        <TouchableOpacity
        className={`${buttonType === 'add' && 'bg-blue-100 text-blue-600'} ${buttonType === 'delete' && 'bg-red-200 text-red-600'} ${buttonType === 'edit' && 'bg-gray-200 text-gray-600'} rounded-full h-9 w-9 flex items-center justify-center ${styling}` } 
        onPress={onPress}>
            {IconComponent}
        </TouchableOpacity>
    );
};

export default IconButton;