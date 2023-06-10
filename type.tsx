import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Slash: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  EditProfile: undefined,
  Home: undefined,
  AllCoursesScreen: undefined,
  CoursContent: undefined,
  Notifications: undefined,
  Experience: undefined,
  Filieres: undefined,
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
