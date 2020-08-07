import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=');
    const data = await response.json();
    setNews(data.articles);
    alert('Primeira execução')
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View>

            <Text>
              {item.author}
            </Text>

            <Text>
              {item.title}
            </Text>

            <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: item.urlToImage}}
            />
            <Text>
              {item.description}
            </Text>

          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
