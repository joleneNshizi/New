
import React, { useState } from 'react';
import {
  AppContainer,
  SettingsContainer,
  SettingsTitle,
  SettingsSection,
  SettingsLabel,
  ThemeSelect,
  CheckboxLabel,
  CheckboxInput,
  Button,
  NotificationContainer,
  Notification,
  CloseButton,
} from './style';
import { BackspaceIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';


const Settings = () => {

  const [notification, setNotification] = useState(null);



  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <AppContainer>
      <SettingsContainer>
        <Link to='/dashboard'><BackspaceIcon style={{width:'20px'}}/></Link>
        <SettingsTitle>Settings</SettingsTitle>

              <SettingsLabel>Study Mode Preferences:</SettingsLabel>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                Enable No-Disturb Technique
              </CheckboxLabel>
              <SettingsLabel>Session Duration:</SettingsLabel>
              <input type="number" placeholder="Enter session duration (minutes)" />

              <SettingsLabel>Study Reminders:</SettingsLabel>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                Enable Daily Reminders
              </CheckboxLabel>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                Receive Long Break Reminder
              </CheckboxLabel>

              <SettingsLabel>Progress Tracking:</SettingsLabel>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                Set Daily Goals
              </CheckboxLabel>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                View Session History
              </CheckboxLabel>

        <Button onClick={() => showNotification('success', 'Settings saved successfully')}>
          Save Settings
        </Button>
      </SettingsContainer>

      {notification && (
        <NotificationContainer>
          <Notification type={notification.type}>
            {notification.message}
            <CloseButton onClick={closeNotification}>&times;</CloseButton>
          </Notification>
        </NotificationContainer>
      )}
    </AppContainer>
  );
};

export default Settings;
