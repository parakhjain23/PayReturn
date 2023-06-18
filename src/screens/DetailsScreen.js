import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ProductDetailsScreen = ({route}) => {
  const {hit} = route?.params;
  const [quantity, setQuantity] = useState(0);

  const {title, variants} = route.params?.hit;
  const variant = variants[0];
  const body_html = variant?.body_html; // Get the first variant
  const image =
    (variant?.Images && variant?.Images[0]) ||
    'https://cdn1.iconfinder.com/data/icons/shopping-and-commerce-round/128/18-512.png';

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{body_html}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={handleRemoveFromCart}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={handleAddToCart}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  quantityButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  quantityText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  addToCartButton: {
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
