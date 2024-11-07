// BlogDetailScreen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';

type BlogDetailScreenRouteProp = RouteProp<{ params: { title: string; content: string } }, 'params'>;

const BlogDetailScreen: React.FC = () => {
  const route = useRoute<BlogDetailScreenRouteProp>();
  const { title, content } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentContainer}>
        <RenderHtml
          contentWidth={400} // Adjust based on your screen width
          source={{ html: content }}
          tagsStyles={htmlStyles} // Use htmlStyles directly here
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

// Define htmlStyles as a plain JavaScript object
// Define htmlStyles as a plain JavaScript object with specific types
const htmlStyles = {
    p: { fontSize: 16, lineHeight: 24, color: '#333' },
    a: { color: '#1e90ff', textDecorationLine: 'underline' as const }, // Explicitly specify the type
    h1: { fontSize: 32, fontWeight: 'bold' as const, marginVertical: 10 },
    h2: { fontSize: 28, fontWeight: 'bold' as const, marginVertical: 8 },
    h3: { fontSize: 24, fontWeight: 'bold' as const, marginVertical: 6 },
    img: { width: '100%', height: 'auto' },
    ul: { paddingLeft: 20, marginVertical: 10 },
    li: { fontSize: 16, lineHeight: 24, color: '#333' },
  };
  

export default BlogDetailScreen;
