/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >

        <View

          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <View className="flex justify-between max-h-screen min-h-full">

            <View className="min-h-[20vh] w-full bg-blue-600">
              <Text></Text>
            </View>
            <View>
              <View className="p-4">
                <Text style={styles.highlight} className="text-black">Login to mobile app</Text>
              </View>
              <View className="p-4 bg-gray-100 m-4 rounded-md mb-2">
                <Text>Login</Text>
              </View>
              <View className="p-4 bg-gray-100 m-4 rounded-md mt-2">
                <Text>Password</Text>
              </View>
              <View className="p-4 bg-blue-600 rounded-md m-4 mt-2 mb-2">
                <Text className="text-white">Login</Text>
              </View>
              <View className="p-4 border border-gray-100 m-4 border-1 rounded-md mt-2 mb-0">
                <Text className="text-gray-400">Create account</Text>
              </View>
              <View className="p-4 m-4 border-1 rounded-md pt-0 pl-0">

                <Text className="text-gray-400 text-xs">Forgot password?</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
