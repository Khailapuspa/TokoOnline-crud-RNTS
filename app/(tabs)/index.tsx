import React from 'react'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  const imageKaos = require("../../assets/images/kaos.png")
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang !</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.row}>
        <Image
          source={imageKaos}
          style={{ width: 150, height: 150 }}
        />
      </View>

      <Link href="/detail">
        <Pressable>
          <TouchableOpacity
            style={[styles.button]}
          >
            <Text style={styles.input}>Beli</Text>
          </TouchableOpacity>
        </Pressable>
      </Link>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={[styles.row, styles.produk]} />
      <Image
        source={{ uri: 'asset:/assets/image/kaos.png' }}
        style={{ width: 40, height: 40 }}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    marginBottom: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
  },
  containerProduk: {
    backgroundColor: "#FFA500",
    justifyContent: 'center',
  },
  produk: {
    marginTop: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#ff8c00',
    marginTop: 8,
  },
});