/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import withObservables from '@nozbe/with-observables';
import {
  Button,
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
import {synchronize, SyncPullArgs} from '@nozbe/watermelondb/sync';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import {compose} from 'recompose';
import { useGlobal } from '../provider/useGlobal';
import { Divider } from 'native-base';

const Section = ({post}): any => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      {post.map((p, i) => (
        <Text
          key={i}
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {p.title}
        </Text>
      ))}
    </View>
  );
};

const HomeScreen = () => {
  const database = useDatabase();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addData = async () => {
    const value = await database.write(async () => {
      const newPost = await database.get('posts').create(post => {
        post.title = String(Math.floor(Date.now() / 1000));
        post.title1 = String(Math.floor(Date.now() / 1000));
        post.title2 = String(Math.floor(Date.now() / 1000));
        post.body = 'Lorem ipsum...';
      });
      return newPost;
    });
    console.log(value);
  };

  const sync = async () => {
    await synchronize({
      database,
      pullChanges: async ({
        lastPulledAt,
        schemaVersion,
        migration,
      }: SyncPullArgs) => {
        // const urlParams = `last_pulled_at=${lastPulledAt}&schema_version=${schemaVersion}&migration=${encodeURIComponent(JSON.stringify(migration))}`
        // const response = await fetch(`https://my.backend/sync?${urlParams}`)
        // if (!response.ok) {
        //   throw new Error(await response.text())
        // }

        // const { changes, timestamp } = await response.json()
        // return { changes, timestamp }

        return {
          timestamp: 123,
        };
      },
      pushChanges: async ({changes, lastPulledAt}) => {
        console.log(changes);
        console.log(lastPulledAt);
        // const response = await fetch(`https://my.backend/sync?last_pulled_at=${lastPulledAt}`, {
        //   method: 'POST',
        //   body: JSON.stringify(changes)
        // })
        // if (!response.ok) {
        //   throw new Error(await response.text())
        // }
      },
      migrationsEnabledAtVersion: 1,
    });
  };

  const {setReRenderNavigation} = useGlobal();
  const logout = async () => {
    await database.adapter.removeLocal('isLogin');
    setReRenderNavigation(true);
  };

  // const data = database.collections.get('posts').query().collection;
  // console.log(data);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button onPress={addData} title="Add Data" />
        <Button onPress={sync} title="Sync" />
        <Button onPress={logout} title="Logout" />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <EnhancedPost database={database} />
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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

const enhance = withObservables(['post'], ({database}) => ({
  post: database.get('posts').query(),
}));

const EnhancedPost = enhance(Section);

export default HomeScreen;
