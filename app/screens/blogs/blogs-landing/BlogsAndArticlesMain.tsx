// BlogsAndArticlesMain.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/nativestore';
import ArticlesAndLatestNews from './ArticlesAndLatestNews';
import  blogThunk  from '../../../store/thunks/blogThunk'; // Adjust this path as needed

const BlogsAndArticlesMain: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, landingData } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(blogThunk());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00CC99" />
      </View>
    );
  }
console.log(landingData);
  if (!landingData || !landingData.sections[0].topArticlesAndBlogsAndLatestNews) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ArticlesAndLatestNews
        data={landingData.sections[0].topArticlesAndBlogsAndLatestNews.subcategories}
        title="Articles & Blogs"
        secondaryTitle="Latest News"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BlogsAndArticlesMain;
