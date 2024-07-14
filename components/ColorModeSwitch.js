import { useColorMode, IconButton, Icon } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import React from 'react';

function useThemeMeta() {
  const { toggleColorMode, colorMode } = useColorMode();

  const isLightMode = colorMode === 'light';

  const icon = isLightMode ? FaMoon : FaSun;
  const checked = !isLightMode;

  const textColor = useColorModeValue("black", "white");

  return {
    checked,
    icon: <Icon as={icon} boxSize="5" />,
    toggleColorMode
  };
}

export function ColorModeSwitch(props) {
  const { icon, checked, toggleColorMode } = useThemeMeta();

  return (
    <IconButton
      {...props}
      onClick={toggleColorMode}
      role="checkbox"
      aria-checked={checked}
      icon={icon}
      color="yellow.500"
      background="none"
      aria-label="Change color mode"
    />
  );
}
