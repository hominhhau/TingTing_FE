import React from "react";

// Sử dụng React.createContext thay vì destructuring import
const ChatContext = React.createContext(null);

export const ChatProvider = ({ children }) => {
    const [activeTab, setActiveTab] = React.useState('chat'); // 'chat' or 'contact'

    const contextValue = React.useMemo(() => ({
        activeTab,
        setActiveTab
    }), [activeTab]);

    return (
        <ChatContext.Provider value={contextValue}>
            {children}
        </ChatContext.Provider>
    );
};

// Hook để dùng context trong các component khác
export const useChat = () => {
    const context = React.useContext(ChatContext);
    
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    
    return context;
};