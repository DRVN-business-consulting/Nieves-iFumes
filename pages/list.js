import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext, themes} from '../style/ThemeCon.js'

const songs = [
  { id:'1', title: 'Birds of a Feather', artist: 'Billie Eilish', image: require('../images/billie.jpg')},
  { id:'2', title: 'Crime and Punishment', artist: 'Ado', image: require('../images/ado.jpg') },
  { id:'3', title: 'Way 4 Love', artist: 'PLAVE', image: require('../images/plave.jpg') },
  { id:'5', title: 'Mr. Loverman', artist: 'Ricky Montomery', image: require('../images/ricky.jpg') },
  { id:'4', title: 'Pluto Projector', artist: 'Rex Orange County', image: require('../images/rex.jpg') },


];

const MyList = ({ setCurrentPage, setSelectedSong }) => {
  const handleSelectSong = (song) => {
    setSelectedSong(song);
    setCurrentPage('player');
  };

  const { theme, colorScheme } = useContext(ThemeContext);
  const themeStyles = themes[theme][colorScheme];

  return (
    <View style={styles.container}>
      <FlatList
        style={{height:'86%'}}
        data={songs}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectSong(item)}  style={[styles.list, themeStyles.border]}>
            <View  style={{flexDirection:'row'}}>
            <Image source={item.image} style={styles.image} />
            
            <View style={{alignSelf:'center'}}>
            <Text style={[styles.song,themeStyles.text]}>{item.title}</Text>
            <Text style={themeStyles.text}>{item.artist}</Text>  
            </View>
              
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
    list:{
        // width: '100%',
        margin:10,
        borderRadius: 8,
        padding: 15,
        borderLeftWidth:2,
        borderBottomWidth:2,   

    },
   image:{
    width: 50,
    height:50,
    borderRadius:10,
    marginRight:10
   },
   song:{
    fontWeight:'bold',
    fontSize:20,
    color: 'ThemeProvider.color'
}
})

export default MyList;
