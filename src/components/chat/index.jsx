import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

const Chat = () => {
  const [search, setSearch] = useState('');
  const [matches, setMatches] = useState([
    {
      id: '1',
      name: "The Won's",
      message: 'We love your food art...',
      time: '10:04 AM',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Clark',
      message: 'We love your food art...',
      time: '10:04 AM',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: "Abdul's",
      message: 'We love your food art...',
      time: '10:04 AM',
      image: 'https://via.placeholder.com/50',
    },
  ]);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...matches];
    const prevIndex = matches.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setMatches(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderMatch = ({item}) => (
    <Image source={{uri: item.image}} style={styles.matchImage} />
  );

  const renderItem = data => (
    <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#AAA'}>
      <View style={styles.conversationItem}>
        <Image
          source={{uri: data.item.image}}
          style={styles.conversationImage}
        />
        <View style={styles.conversationInfo}>
          <View style={styles.conCombine}>
          <Text style={styles.conversationName}>{data.item.name}</Text>
          <Text style={styles.conversationTime}>{data.item.time}</Text>
          </View>
          <Text style={styles.conversationMessage}>{data.item.message}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.id)}>
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.id)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Matches</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.input}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              placeholderTextColor={'rgba(38, 29, 42, 0.2)'}
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <View style={styles.progress}>
            <Text style={styles.progText}>Matchs</Text>
            <FlatList
              horizontal
              data={matches}
              renderItem={renderMatch}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.matches}
            />
          </View>
          <View style={styles.chat}>
            <Text style={styles.progText}>Conversations</Text>
            <SwipeListView
              data={matches}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              leftOpenValue={75}
              rightOpenValue={-150}
              previewRowKey={'0'}
              previewOpenValue={-40}
              previewOpenDelay={3000}
              onRowDidOpen={onRowDidOpen}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.conversations}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    width: '100%',
    flex: 1,
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  container: {
    marginHorizontal: 'auto',
    width: 358,
  },
  header: {
    width: 358,
    marginHorizontal: 'auto',
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    fontWeight: '36.48',
    color: 'rgba(5, 34, 34, 1)',
  },
  input: {
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 50,
    height: 54,
    elevation: 1,
    marginBottom: 20,
    width: 358,
    marginHorizontal: 'auto',
  },
  searchBar: {
    width: 294,
    margin: 'auto',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.6,
    alignItems: 'center',
  },
  progress: {
    marginTop: 15,
    width: 358,
    marginHorizontal: 'auto',
  },
  progText: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
    color: 'rgba(5, 34, 34, 1)',
    marginBottom: 15,
  },

  matchImage: {
    width: 73.75,
    height: 73.75,
    borderRadius: 50,
    marginRight: 5,
  },
  chat: {
    marginTop: 25,
  },
  conversations: {
    width: 390,
    // height: 89
  },
  conversationItem: {
    width: 358,
    height: 73,
    flexDirection: 'row',
    // paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  conversationImage: {
    width: 74.3,
    height: 73,
    borderRadius: 50,
  },
  conversationInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  conversationName: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
    color: "rgba(33, 33, 33, 1)"
  },
  conversationMessage: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
    color: "rgba(81, 81, 81, 1)"
  },
  conversationTime: {
    color: 'rgba(164, 161, 161, 1)',
    fontSize: 14,
    fontWeight: "400",
    lineHeight:19.6
  },
  rowFront: {
    width: 358,
    height: 89,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    borderBottomColor: 'rgba(38, 29, 42, 0.05)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    // height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
  conCombine: {
    width: 251,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default Chat;
