import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import React, {useContext} from 'react';
import {ThemeContext, themes} from '../style/ThemeCon.js'

const MyPlayer = ({ selectedSong, progress, setCurrentPage, setSelectedSong, isPlaying, setIsPlaying }) => {
  const handleBackToList = () => {
    setCurrentPage('list');
    setSelectedSong(null);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); 
  };

  const { theme, colorScheme } = useContext(ThemeContext);
  const themeStyles = themes[theme][colorScheme];

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.back} title="Back to List" onPress={handleBackToList} >
      <Icon name="arrow-left" size={20} style={themeStyles.text} color="black" />
      <Text style={[styles.back, themeStyles.text]}> Now Playing</Text>
      </TouchableOpacity>
       {selectedSong ? (
        <View>
             <Image source={selectedSong.image} style={styles.image} />
        <Text style={[styles.song,themeStyles.text]}>{selectedSong.title}</Text> 
        <Text style={themeStyles.text}>{selectedSong.artist}</Text> 
        </View> ) : 'No Song Selected'}
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar,themeStyles.progress,{ width: `${progress}%` },]}
        />
      </View>
        <TouchableOpacity style={styles.play} onPress={handlePlayPause}>
        <Icon name={isPlaying ? 'pause' : 'play'} size={30} style={themeStyles.text}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  progressBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 5,
    marginVertical: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  back:{
    flexDirection:'row',
    alignItems: 'center',
    fontSize:20
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 25,
    marginVertical: 20,
  },
  song:{
    fontWeight:'bold',
    fontSize:20
},
play: {
    alignSelf:'center'
}
});

export default MyPlayer;
