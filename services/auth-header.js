import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function authHeader() {
  const user = JSON.parse(await AsyncStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
