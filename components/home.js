import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import Article from '../components/article';
import { useSelector, useDispatch } from 'react-redux';
import {handlecategory} from '../actions';
import {handleresults} from '../actions';

export default function Home() {
  const apikey = "292933993e8e4a0cb8137bbcd3d8f212";
  const dispatch = useDispatch();
  const category = useSelector(state => state.category);
  const results = useSelector(state => state.results);

  const setRecentNews = () => {
          dispatch(handlecategory("general"));
          axios("https://newsapi.org/v2/top-headlines?language=en&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }
  const setBusiness = () => {
          dispatch(handlecategory("business"));
          axios("https://newsapi.org/v2/top-headlines?category=business&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }
  const setEntertainment = () => {
          dispatch(handlecategory("entertainment"));
          axios("https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }
  const setGeneral = () => {
          dispatch(handlecategory("general"));
          axios("https://newsapi.org/v2/top-headlines?category=general&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }
  const setScience = () => {
          dispatch(handlecategory("science"));
          axios("https://newsapi.org/v2/top-headlines?category=science&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }
  const setHealth = () => {
          dispatch(handlecategory("health"));
          axios("https://newsapi.org/v2/top-headlines?category=health&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }
  const setSport = () => {
          dispatch(handlecategory("sport"));
          axios("https://newsapi.org/v2/top-headlines?category=sport&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }
  const setTechnology = () => {
          dispatch(handlecategory("technology"));
          axios("https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=" + apikey).then(response => {
                    dispatch(handleresults(response.data.articles));
                  }).catch(error => {
                               console.log(error);
                             });
          console.log(results);
        }


  return (

    <ScrollView style={{flex: 8}}>
            <View style={styles.news}>
                <TouchableOpacity style={styles.allnews} onPress={setRecentNews}>
                      <ImageBackground
                       style={styles.backgroundImage}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/allnews.jpg')}>
                       <Text style={styles.categories}>All recent news</Text>
                      </ImageBackground>
                </TouchableOpacity>
              <View style={{flexDirection: "row"}}>
                <View style={styles.columns}>
                    <TouchableOpacity style={styles.business} onPress={setBusiness}>
                      <ImageBackground
                       style={styles.backgroundImage1}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/business.jpg')}>
                       <Text style={styles.categories}>Business</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.business} onPress={setGeneral}>
                      <ImageBackground
                       style={styles.backgroundImage2}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/general.jpg')}>
                       <Text style={styles.categories}>General</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.business} onPress={setScience}>
                      <ImageBackground
                       style={styles.backgroundImage4}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/science.jpg')}>
                       <Text style={styles.categories}>Science</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={styles.columns}>
                    <TouchableOpacity style={styles.business} onPress={setEntertainment}>
                      <ImageBackground
                       style={styles.backgroundImage}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/entertainment.jpg')}>
                      <Text style={styles.categories}>Entertainment</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.business} onPress={setHealth}>
                      <ImageBackground
                       style={styles.backgroundImage3}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/health.jpg')}>
                       <Text style={styles.categories}>Health</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.business} onPress={setSport}>
                      <ImageBackground
                       style={styles.backgroundImage2}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/sport.jpg')}>
                      <Text style={styles.categories}>Sport</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.business} onPress={setTechnology}>
                      <ImageBackground
                       style={styles.backgroundImage5}
                       imageStyle={{ borderRadius: 19 }}
                       source={require('../src/technology.jpg')}>
                       <Text style={styles.categories}>Technology</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                </View>
               </View>
            </View>
             </ScrollView>


)}

const styles = StyleSheet.create({
  allnews: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  backgroundImage: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
  },
  backgroundImage1: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
    },
  backgroundImage2: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
    },
  backgroundImage3: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
    },
  backgroundImage4: {
    height: 165,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
    },
  backgroundImage5: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
    },
  categories: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
  columns: {
    flex: 1,
    flexDirection: "column",
  },
  business: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
  }
  }
);