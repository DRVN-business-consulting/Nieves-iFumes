import { SafeAreaView, StyleSheet, Text, Button, View, Switch, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import MyList from './pages/list.js';
import MyPlayer from './pages/player.js';
import {ThemeContext, themes} from './style/ThemeCon.js'

export default function App(){
  const [currentPage, setCurrentPage] = useState('list');
  const [selectedSong, setSelectedSong] = useState(null);
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
 
  const [colorScheme, setColorScheme] = useState('lightblue');
  const [theme, setTheme] = useState('light');
  const themeStyles = themes[theme][colorScheme];

  const toggleTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  useEffect(() => {
    let id; 
  
    if (currentPage === 'player' && selectedSong && isPlaying) {
      id = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(id); 
            setIsPlaying(false);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 100);
      setIntervalId(id); 
    } else {
      clearInterval(intervalId); 
    }

    return () => {
      clearInterval(id); 
    };
  }, [currentPage, selectedSong,isPlaying]); 

  //reset progress on song change
  useEffect(() => {
    if (selectedSong) {
      setProgress(0);
      setIsPlaying(true); 
    }
  }, [selectedSong]);

  return (
    <ThemeContext.Provider value={{theme, colorScheme, setTheme, setColorScheme}}>
    <SafeAreaView style={[styles.container,themeStyles.background]}>

    <Text style={[styles.title,themeStyles.text, themeStyles.border]}>iFumes Music</Text>
  
      {currentPage === 'list' && (
        <MyList setCurrentPage={setCurrentPage} setSelectedSong={setSelectedSong} />
      )}
      {currentPage === 'player' && (
        <MyPlayer
          selectedSong={selectedSong}
          progress={progress}
          setCurrentPage={setCurrentPage}
          setSelectedSong={setSelectedSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
     
      
          {/* <Button title="Light Mode" onPress={() => setTheme('light')} />
          <Button title="Dark Mode" onPress={() => setTheme('dark')} /> */}
        
        <View style={styles.colorContainer}>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
          <TouchableOpacity style={[{backgroundColor:'lightcoral'},styles.themebtn]} onPress={() => setColorScheme('lightcoral')}></TouchableOpacity>
          <TouchableOpacity  style={[{backgroundColor:'lightblue'},styles.themebtn]}onPress={() => setColorScheme('lightblue')}></TouchableOpacity>
          <TouchableOpacity  style={[{backgroundColor:'goldenrod'},styles.themebtn]} onPress={() => setColorScheme('goldenrod')}></TouchableOpacity>
        </View>
      
    </SafeAreaView>
    </ThemeContext.Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 24,
  },
  title:{
    fontWeight:'bold',
    fontSize:40,
    marginBottom:20,
    borderBottomWidth: 0.5
},
themebtn:{
  width:80, 
  height:40,
  borderRadius:30,
  borderWidth:1, 
  borderColor:'gray',
  marginHorizontal:3
},
colorContainer:{
  flexDirection:'row',
  alignSelf:'flex-end'
}
});
