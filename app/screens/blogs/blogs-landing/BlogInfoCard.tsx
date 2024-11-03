// BlogInfoCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface BlogInfoCardProps {
  blogInfo: {
    newsId: number;
    title: string;
    imageUrl: string;
    description: string;
    category: string;
    publishedDate: string;
  };
}

const BlogInfoCard: React.FC<BlogInfoCardProps> = ({ blogInfo }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: blogInfo.imageUrl || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{blogInfo.title}</Text>
        <Text style={styles.date}>{new Date(blogInfo.publishedDate).toLocaleDateString()}</Text>
        <Text style={styles.category}>{blogInfo.category}</Text>
        <Text style={styles.description}>{blogInfo.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  category: {
    fontSize: 12,
    color: '#00CC99',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#555',
  },
});

export default BlogInfoCard;
