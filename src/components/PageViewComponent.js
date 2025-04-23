import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const images = [
  require('../assets/image6.png'), // Replace with your actual image paths
  require('../assets/image7.png'),
  require('../assets/image8.png'),
  // Add more image paths as needed
];

const PageViewComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newPage = Math.round(contentOffsetX / screenWidth);
    setCurrentPage(newPage);
  };

  const scrollToPage = (pageNumber) => {
    scrollViewRef.current?.scrollTo({
      x: pageNumber * screenWidth,
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextPage = (currentPage + 1) % images.length;
      scrollToPage(nextPage);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.pageViewContainer}>
            <Image source={image} style={styles.pageViewImage} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    alignItems: 'center',
  },
  pageViewContainer: {
    width: screenWidth * 0.9,
    height: 166,
    margin: screenWidth * 0.05,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  pageViewImage: {
    width: screenWidth * 0.9,
    height: 166,
  },
});

export default PageViewComponent;