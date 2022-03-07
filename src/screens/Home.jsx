import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from "react-redux";
import { requestPosts } from "../store/actions/posts";

const Home = ({posts, fetching, error, getPosts})=>{
    console.log(getPosts)
  return (
    <View style={styles.container}>
      <Button title={'GET POSTS'} onPress={getPosts}/>
      {fetching ?
        <Text>Loading...</Text>
      :
      
      <FlatList
        data={posts}
        keyExtractor={(x)=>x.id}
        renderItem={({item})=>(
            <View style={{marginVertical: 5, }}>
                <Text>{item.title}</Text>
            </View>
        )}
      />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60
  },
});

const mapStateToProps = state => {
    const reducer = state.postsReducer
    console.log(reducer)
    return {
      fetching: reducer.fetching,
      posts: reducer.data,
      error: reducer.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getPosts: () => dispatch(requestPosts())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home)