// BlogsAndArticlesMain.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootState, AppDispatch } from '../../../store/nativestore';
import { blogThunk, fetchAllSections } from '../../../store/thunks/blogThunk';
import { RootStackParamList } from '../../../types'; // Import the types

interface CreatedUser {
  userId: number;
  firstName: string;
  lastName: string;
  [key: string]: any;
}

interface Result {
  newsId: number;
  title: string;
  content: string;
  createdUser: CreatedUser;
  [key: string]: any;
}

interface PaginatedResponse {
  results: Result[];
  [key: string]: any;
}

interface Subcategory {
  paginatedResponse: PaginatedResponse;
  [key: string]: any;
}

interface Category {
  subcategories: Record<string, Subcategory>;
  [key: string]: any;
}

interface DataStructure {
  categories: Record<string, Category>;
  [key: string]: any;
}

interface ContentEntry {
  title: string;
  content: string;
}

// Function to find and collect content entries for a given user's first name
const findUserContent = (data: DataStructure, targetFirstName: string): ContentEntry[] => {
  const results: ContentEntry[] = [];

  const scanObject = (obj: any): void => {
    if (obj && obj.createdUser && obj.createdUser.firstName === targetFirstName) {
      results.push({
        title: obj.title,
        content: obj.content,
      });
    }

    for (const key in obj) {
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        scanObject(obj[key]);
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach((item: any) => scanObject(item));
      }
    }
  };

  scanObject(data);
  return results;
};

const BlogsAndArticlesMain: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { loading, landingData, allSectionsData } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(blogThunk());
    dispatch(fetchAllSections());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00CC99" />
      </View>
    );
  }

  if (!landingData || !landingData.sections[0].topArticlesAndBlogsAndLatestNews) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

  const userContent = allSectionsData
    ? findUserContent(allSectionsData, "Yasaswini")
    : [];

  console.log("User content for Yasaswini:", userContent);

  return (
    <View style={styles.container}>
      {/* <ArticlesAndLatestNews
        data={landingData.sections[0].topArticlesAndBlogsAndLatestNews.subcategories}
        title="Articles & Blogs"
        secondaryTitle="Latest News"
      /> */}

      {userContent.length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Text>User-specific content for Yasaswini:</Text>
          {userContent.map((entry, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('BlogDetail', { title: entry.title, content: entry.content })}
              style={{ marginVertical: 5 }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'blue' }}>{entry.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
