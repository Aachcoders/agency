// components/chatbot.tsx
'use client';
import Script from 'next/script';

const ChatBubble: React.FC = () => {
  return (
    <>
      <Script id="chatbase-config">
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "VygMOBYBxJ4vy6Bgg85Nf",
            domain: "www.chatbase.co"
          }
        `}
      </Script>
      <Script
        id="chatbase-embed"
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
        defer
      />
    </>
  );
};

export default ChatBubble;