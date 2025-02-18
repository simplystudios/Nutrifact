import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import IconBar from "../components/icons";

export default function Search({ navigation }) {
  const [valsearch, setValsearch] = useState("");
  const [prods, setProds] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchproducts = async () => {
    setLoading(true);
    const api = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${valsearch}&search_simple=1&action=process&json=1`;
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProds(data.products);
      console.log(data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (valsearch) {
      searchproducts();
    }
  }, [valsearch]);

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          onKeyPress={() => searchproducts()}
          onChangeText={newText => setValsearch(newText)}
          defaultValue={valsearch}
          style={styles.searchInput}
        />
        <IconBar name="search-outline" colors={"#2e5274"} fonts={30} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#2e5274" />
      ) : prods ? (
        <ScrollView>
          {prods.map((datap, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Product", { datap })}
              key={index}
              style={styles.productContainer}
            >
              <Image source={{ uri: datap.image_url }} style={styles.productImage} />
              <Text style={styles.productName}>{datap.product_name}</Text>
              <IconBar name="chevron-forward-outline" colors={"#2e5274"} fonts={30} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Text>No products found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    justifyContent: 'space-between',
    padding: 12,
    margin: 10,
    alignItems: "center",
    marginTop: 30,
    borderColor: "#2e5274",
    borderWidth: 2,
    borderRadius: 12,
  },
  searchInput: {
    fontSize: 18,
    width: "90%",
    color: "#000000",
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    justifyContent: 'space-between',
    padding: 12,
    margin: 10,
    alignItems: "center",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 12,
  },
  productImage: {
    width: 50,
    height: 50,
  },
  productName: {
    fontSize: 18,
    color: "#000000",
    maxWidth: "100%",
    overflow: "hidden",
  },
});