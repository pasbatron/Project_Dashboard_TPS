import React, { useState, useEffect, useCallback } from 'react';
import mqtt from 'mqtt';
import { Box } from '@mui/material';

const MQTTDashboard = ({ onMessage }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [topic, setTopic] = useState('11220223_core_data_nais');
    const [client, setClient] = useState(null);

    useEffect(() => {
        const mqttClient = mqtt.connect('ws://broker.mqtt-dashboard.com:8000/mqtt');
        setClient(mqttClient);

        mqttClient.on('connect', () => {
            setIsConnected(true);
            mqttClient.subscribe(topic);
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
    }, [topic, onMessage]);

    return (
        <Box sx={{ padding: 0 }}>
            {}
        </Box>
    );
};

export default MQTTDashboard;
