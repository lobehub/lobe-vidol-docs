import { ActionIcon } from '@lobehub/ui';
import { Mic } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import useStyles from './style';

const ChatBot = () => {
  const [message, setMessage] = useState<string>('打开梯子，说中文');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const { styles } = useStyles();

  // @ts-ignore
  const [speechRecognition, setSpeechRecognition] = useState<window.SpeechRecognition>();

  // @ts-ignore
  const handleRecognitionResult = useCallback((event: window.SpeechRecognitionEvent) => {
    const text = event.results[0][0].transcript;
    setMessage(text);

    if (event.results[0].isFinal) {
      setMessage(text);
      // onChatProcessStart(text);
    }
  }, []);

  const handleRecognitionEnd = useCallback(() => {
    setIsRecording(false);
  }, []);

  useEffect(() => {
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    // recognition.lang = 'en-EN';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.addEventListener('result', handleRecognitionResult);
    recognition.addEventListener('end', handleRecognitionEnd);

    setSpeechRecognition(recognition);
  }, [handleRecognitionResult, handleRecognitionEnd]);

  const handleRecord = () => {
    if (isRecording) {
      speechRecognition?.abort();
      setIsRecording(false);

      return;
    }

    speechRecognition?.start();
    setIsRecording(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.message}>{message}</div>
      <ActionIcon icon={Mic} loading={isRecording} onClick={handleRecord} />
    </div>
  );
};

export default ChatBot;
