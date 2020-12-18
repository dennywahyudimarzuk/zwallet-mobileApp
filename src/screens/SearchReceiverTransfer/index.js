import React from 'react';
import {BASE_URL} from '../../utils';
import {
  Image,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  RectButton,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearch} from '../../redux/actions/Search';
import {GetReceiver} from '../../redux/actions/Receiver';

const SearchReceiver = ({navigation}) => {
  const {data} = useSelector((state) => state.Auth);
  const { dataSearch } = useSelector((state) => state.Search);
  const [search, setSearch] = React.useState('');
  const [limit, setLimit] = React.useState(5);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetSearch(data, search, limit));
  }, [search, limit]);

  const SearchResult = ({item, index}) => {
    return (
      <View style={styles.contentSearch}>
        <TouchableOpacity
          style={{flexDirection: 'row', padding: 1}}
          onPress={() => {
            dispatch(GetReceiver(data, item.phone));
            navigation.navigate('InputAmount');
          }}>
          <View style={{padding: 5}}>
            <Image
              style={{
                width: 47,
                height: 47,
                borderRadius: 10,
              }}
              source={{
                uri: `${BASE_URL}/images/${item.photo}`,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 15,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
            <Text>+62{item.phone}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const More = () => {
    setLimit(500);
  };

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.topbar}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 40,
              marginHorizontal: 20,
            }}>
            <RectButton onPress={() => navigation.navigate('Dashboard')}>
              <Image
                style={{
                  height: 28,
                  width: 28,
                }}
                source={require('../../icons/arrow-left.png')}
              />
            </RectButton>
            <Text style={styles.find}>Find Receiver</Text>
          </View>
          <View style={styles.search}>
            <TextInput
              style={{marginLeft: 10}}
              placeholder="Search Receiver Here"
              value={search}
              onChangeText={(e) => setSearch(e)}
              autoCapitalize={'none'}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 30,
          }}>
          <Text
            style={{
              flex: 0.5,
              fontSize: 18,
              fontWeight: '700',
              color: '#514F5B',
            }}>
            Contacts
          </Text>
          <Text
            style={{
              flex: 0.5,
              fontSize: 14,
              fontWeight: '600',
            }}>
            <Text>{dataSearch.length}</Text> Contact founds
          </Text>
        </View>
        <ScrollView style={{marginTop: 5, marginBottom: 5}}>
          <FlatList
            data={dataSearch}
            renderItem={SearchResult}
            style={{marginBottom: 10}}
          />
          {limit == 5 ? (
            <RectButton >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 15
                }}
                onPress={More}>
                More
              </Text>
            </RectButton>
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default SearchReceiver;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FAFCFF',
  },
  find: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20
  },
  search: {
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
  },
  balance: {
    alignSelf: 'center',
    marginRight: 10,
  },
  topbar: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#6379F4',
  },
  history: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  contentSearch: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 2,
  },
});
