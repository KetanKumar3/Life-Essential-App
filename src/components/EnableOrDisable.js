import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const SwitchItem = ({ label, enabledLabel, disabledLabel }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.switchItem}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: 'black' }}
        thumbColor={isEnabled ? '#89A97A' : 'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <Text style={styles.enableText}>{isEnabled ? enabledLabel : disabledLabel}</Text>
    </View>
  );
};

const EnableOrDisable = () => {
  return (
    <ScrollView style={styles.container}>
      <SwitchItem label="Pedometer" enabledLabel="Enable" disabledLabel="Disable" />
      <SwitchItem label="Schedule remainder" enabledLabel="Enable" disabledLabel="Disable" />
      <SwitchItem label="Notifications" enabledLabel="Enable" disabledLabel="Disable" />
      <SwitchItem label="Log Remainder" enabledLabel="Enable" disabledLabel="Disable" />
      <SwitchItem label="Survey" enabledLabel="Enable" disabledLabel="Disable" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
    backgroundColor: '#f9f9f9',
  },
  switchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal:20,
  },
  label: {
    fontSize: width * 0.040,
    color: '#333',
    flex: 1,
  },
  switch: {
    marginLeft: width * 0.02,
  },
  enableText: {
    fontSize: width * 0.04,
    color: '#333',
    marginLeft: width * 0.02,
  },
});

export default EnableOrDisable;