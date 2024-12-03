// ControlMQTT.jsx
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { Box } from '@mui/material';
import { ComponentRealtimeChart } from './ComponentRealtimeChart';
import './css/ComponentControlMQTT.css';

export const ComponentControlMQTT = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [topic, setTopic] = useState('11220223_core_data_nais');
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState(null);
  const [mqttData, setMqttData] = useState(null);


  const onMessage = (newMessage) => {
    console.log('Received message:', newMessage);
    setMessage(newMessage);
    setMqttData(parseFloat(newMessage));
  };

  useEffect(() => {
    const mqttClient = mqtt.connect('ws://192.168.1.10:8000/mqtt');
    setClient(mqttClient);

    mqttClient.on('connect', () => {
      console.log('Connected to MQTT broker');
      setIsConnected(true);
      mqttClient.subscribe(topic, (err) => {
        if (err) {
          console.log('Failed to subscribe to topic:', err);
        } else {
          console.log('Subscribed to topic:', topic);
        }
      });
    });

    mqttClient.on('message', (receivedTopic, payload) => {
      if (receivedTopic === topic) {
        const newMessage = payload.toString();
        onMessage(newMessage);
      }
    });

    return () => {
      mqttClient.end();
    };
  }, [topic]);  

  return (
    <div>

      
      {
        /* 
        <Box sx={{ padding: 0 }}>
          <p>Connection : {isConnected ? 'Connected' : 'Disconnected'}</p><p>Last Message: {message}</p>
        </Box> */
      
      }



      <ComponentRealtimeChart mqttData={mqttData} />

    </div>
  );
};
