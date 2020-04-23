import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  BackAndroid,
  RefreshControl
} from 'react-native';
import Home from './components/home';
import Article from './components/article';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {changetext} from './actions';
import {handleresults} from './actions';
import {handlecategory} from './actions';


export default function App() {
  const dispatch = useDispatch();
  const results = useSelector(state => state.results);
  const s = useSelector(state => state.s);
  const category = useSelector(state => state.category);

    const apikey = "292933993e8e4a0cb8137bbcd3d8f212";

  /*CHANGE STATE USING REDUX WHEN SOMETHING IS TYPED IN TEXTINPUTBOX*/
    const handleInput = e => {
        dispatch(changetext(e));
        dispatch(handlecategory(""));
        axios("https://newsapi.org/v2/everything?q=" + s + "&apiKey=" + apikey).then(response => {
                  dispatch(handleresults(response.data.articles));
                }).catch(error => {
                             console.log(error);
                           });
      }

/*SET BACK BUTTON TO GO BACK TO HOME SCREEN*/
useEffect(() => {
    const setHome = () => {

              dispatch(changetext(""));
              dispatch(handlecategory(""));
              dispatch(handleresults([]));
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      setHome
    );

    return () => backHandler.remove();
  }, []);


  return (
        <View style={{flex: 1, flexDirection: 'column', }}>
        <View style={styles.title}>
            <Text style={styles.logo}>🍊rangeNews</Text>
        </View>
        <View style={styles.research}>
        <TextInput placeholder="Search..." style={styles.input} onChangeText={handleInput}/>
        </View>
        {(s === "") && (category === "") ? (
                 <Home />
              ) : (
            <Article results={results}/>
                )}
         </View>

  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    marginTop: 10,
  },
  title: {
    backgroundColor: "#ffaf1a",
    justifyContent: "center",
    alignItems: 'center'
  },
  research: {
    backgroundColor: "#ffaf1a",

    justifyContent: 'center',
    alignItems: 'stretch',
  },
  input: {
    height: 37,
    backgroundColor: "#ffdb99",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
  },

  }
);
