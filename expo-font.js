import * as Font from 'expo-font';

export const loadFonts = () => {
  return Font.loadAsync({
    
    'AbrilFatface': require('./assets/fonts/AbrilFatface-Regular.ttf'),
    'Aclonica': require('./assets/fonts/Aclonica-Regular.ttf'),
    
  });
};
