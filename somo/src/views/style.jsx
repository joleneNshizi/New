// StyledComponents.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const SettingsContainer = styled.div`
  flex: 1;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SettingsTitle = styled.h2`
  color: #343a40;
`;

export const SettingsSection = styled.div`
  margin-bottom: 20px;
`;

export const SettingsLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ThemeSelect = styled.select`
  padding: 8px;
  font-size: 14px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #495057;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

export const Notification = styled.div`
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.type === 'success' ? '#28a745' : '#dc3545')};
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
`;

// Add more styled components as needed
