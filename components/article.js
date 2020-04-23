import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  List,
  Image,
  ImageBackground,
  Linking,
  RefreshControl,
  ScrollView
} from 'react-native';

export default function Article({ results }) {

  /*SET PULL TO REFRESH*/ 
      const [refreshing, setRefreshing] = React.useState(false);

      const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);

      }, [refreshing]);


return (
            <View style={{flex: 30, backgroundColor: "#fff"}}>
                            <FlatList
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                                data={results}
                                renderItem={({item}) =>
                                    <View style={{borderRadius:29}}>
                                    <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.article}>
                                        <ImageBackground style={styles.backgroundImage} source={{uri: item.urlToImage}} imageStyle={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }} />
                                        <Text style={styles.articleTitle}>{item.title}</Text>
                                        <Text style={styles.articleDescription}>{item.description}</Text>
                                    </TouchableOpacity>
                                    </View>
                                        }
                                        keyExtractor={(item, index) => index.toString()}
                                    />
            </View>
      );
    }

const styles = StyleSheet.create({
    article: {
    backgroundColor: "#ffdb99",
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 19,
    },
    backgroundImage: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
    },
    articleTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 5,
    },
    articleDescription: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 10,
    },
  }
);
