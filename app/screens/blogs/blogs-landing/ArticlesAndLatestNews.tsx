// ArticlesAndLatestNews.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TitleCard from './TitleCard';
import BlogInfoCard from './BlogInfoCard';

interface ArticlesAndLatestNewsProps {
  data: {
    [key: string]: {
      results: Array<any>;
    };
  };
  title: string;
  secondaryTitle: string;
}

const ArticlesAndLatestNews: React.FC<ArticlesAndLatestNewsProps> = ({
  data,
  title,
  secondaryTitle,
}) => {
  return (
    <View style={styles.container}>
      {/* Articles & Blogs Section */}
      <View style={styles.section}>
        <TitleCard title={title} bgColor="#00CC99" color="#ffffff" />
        <FlatList
          data={data['Articles & Blogs']?.results}
          renderItem={({ item }) => <BlogInfoCard blogInfo={item} />}
          keyExtractor={(item) => item.newsId.toString()}
        />
      </View>

      {/* Latest News Section */}
      <View style={styles.section}>
        <TitleCard title={secondaryTitle} bgColor="#00CC99" color="#ffffff" />
        <FlatList
          data={data['Latest News']?.results}
          renderItem={({ item }) => <BlogInfoCard blogInfo={item} />}
          keyExtractor={(item) => item.newsId.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    marginVertical: 10,
  },
});

export default ArticlesAndLatestNews;
