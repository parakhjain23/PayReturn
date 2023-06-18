import React, {useCallback} from 'react';
import {
  connectSearchBox,
  connectHits,
  InstantSearch,
  connectInfiniteHits,
} from 'react-instantsearch-native';
import algoliasearch from 'algoliasearch';
import {
  FlatList,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-paper';
import Crousel from './Crousel';
import {useNavigation} from '@react-navigation/native';
const client = algoliasearch('PJWBTAEX15', '04a2e0c52e45901dffceb7102c8dcc75');
// const index = client.initIndex('AirtableProduct');
const SearchBox = ({currentRefinement, refine}) => {
  return (
    <View style={{marginHorizontal: 15, marginVertical: 10}}>
      <TextInput
        placeholder="Search"
        onChangeText={text => refine(text)}
        value={currentRefinement}
        style={{borderWidth: 1, borderColor: 'black', paddingHorizontal: 15}}
      />
    </View>
  );
};
const ConnectedSearchBox = connectSearchBox(SearchBox);

const {width} = Dimensions.get('window');
const cardWidth = (width - 24 * 2) / 2;
const Hit = ({hit}) => {
  const Navigation = useNavigation();
  const {title, min, max, vendor, variants} = hit;
  const firstVariant = variants[0];
  const isMoreVariants = variants.length > 1;
  const firstImage =
    (firstVariant?.Images && firstVariant?.Images[0]?.split(',')) || null;
  const imageToShow = firstImage
    ? firstImage[0]?.trim()?.replace('"', '')
    : 'https://cdn1.iconfinder.com/data/icons/shopping-and-commerce-round/128/18-512.png';
  return (
    <TouchableOpacity
      onPress={() => {
        Navigation.navigate('Details', {hit});
      }}>
      <Card style={[styles.container, {width: cardWidth}]}>
        <View style={styles.left}>
          {imageToShow != null && (
            <Image style={styles.image} source={{uri: imageToShow}} />
          )}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>
            {isMoreVariants
              ? 'Rs.' + Math.ceil(Number(min)) + ' - ' + Math.ceil(Number(max))
              : 'Rs.' + Math.ceil(Number(min))}
          </Text>
          <Text style={styles.vendor}>{firstVariant.Vendor}</Text>
        </View>
        {/* {isMoreVariants && <Icon name="plus" size={24} color="black" />} */}
      </Card>
    </TouchableOpacity>
  );
};
const InfiniteHits = ({hits, hasMore, refineNext}) => {
  // console.log(hits);
  return (
    <></>
    // <FlatList
    //   data={hits}
    //   keyExtractor={item => item.objectID}
    //   renderItem={({item}) => (
    //     <View>
    //       <Text>{item.title}</Text>
    //       <Text>{item.description}</Text>
    //     </View>
    //   )}
    //   onEndReached={() => {
    //     if (hasMore) {
    //       refineNext();
    //     }
    //   }}
    //   ListFooterComponent={() => {
    //     if (hasMore) {
    //       return <Text>Loading more results...</Text>;
    //     } else {
    //       return null;
    //     }
    //   }}
    // />
  );
};

const ConnectedInfiniteHits = connectInfiniteHits(InfiniteHits);
const Hits = ({hits}) => {
  const renderItem = useCallback(item => {
    return <Hit hit={item?.item} />;
  }, []);

  return hits?.length == 0 ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={hits}
      keyExtractor={item => item.objectID}
      renderItem={renderItem}
      keyboardShouldPersistTaps="always"
      onScrollBeginDrag={() => Keyboard.dismiss()}
      numColumns={2}
      contentContainerStyle={styles.list}
    />
  );
};

const ConnectedHits = connectHits(Hits);

const Algolia = () => {
  return (
    <InstantSearch
      searchClient={client}
      indexName="AirtableProduct"
      // searchState={searchState}
      hitsPerPage={1000}>
      <ConnectedSearchBox />
      <ScrollView>
        <Crousel />
        <View>
          <ConnectedHits />
        </View>
      </ScrollView>
      {/* <ConnectedInfiniteHits /> */}
    </InstantSearch>
    // <Text>hello</Text>
  );
};
export default Algolia;
const styles = StyleSheet.create({
  list: {
    padding: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flex: 1,
    marginHorizontal: 8,
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
  vendor: {
    fontSize: 14,
    color: '#999',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
  },
});
