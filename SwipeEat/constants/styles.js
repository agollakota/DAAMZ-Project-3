import { StyleSheet } from 'react-native'

export default const styles = StyleSheet.create({

// HeaderStyles
  headerOuterStyle: {
    backgroundColor: '#397031',
  },
  headerOuterStyle: {
    justifyContent: 'space-around'
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30
  },
// SwipeCards styles
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    },
// RestaurantCard styles
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    minWidth: 350,
    marginTop: 25,
    marginHorizontal: 25,
    marginBottom: 50,
    backgroundColor: '#7ec0ee',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'grey',
    overflow: 'hidden',
    },
  cardTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
    },
// FavoritesList styles
  favoritesContainer: {
   flex: 1,
   paddingTop: 12
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
// FilterPage styles
  filtersContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:15,
  },
  filters: {
    flex: 3,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom:15
  },
  headers: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
  },
  buttonText:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})
