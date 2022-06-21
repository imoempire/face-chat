import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Dimensions,
} from "react-native";

const width = Dimensions.get("window").width;

const ListChats = () => {
  const data = [
    { name: "James", message: "I love You", Time: "20:00", active: true },
    { name: "James", message: "I need money", Time: "02:00", active: false },
    { name: "James", message: "Hi", Time: "12:00", active: true },
    { name: "James", message: "Where are You", Time: "09:00", active: false },
    { name: "James", message: "I love You", Time: "14:00", active: true },
    { name: "James", message: "hey", Time: "13:00", active: true },
    { name: "James", message: "now", Time: "05:00", active: false },
    { name: "James", message: "ok", Time: "10:00", active: true },
  ];
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.Tab}>
                <View>
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzz-AZTU3LzK6Rw74sXMHf0_nwXjUg1Z4Dfw&usqp=CAU",
                    }}
                    style={{ width: 70, height: 70, borderRadius: 100 }}
                  />
                  {item.active ? (
                    <View
                      style={{
                        width: 13,
                        height: 13,
                        backgroundColor: "green",
                        borderRadius: 100,
                        marginLeft: 50,
                        marginTop: -13,
                      }}
                    ></View>
                  ) : null}
                </View>
                <View style={styles.Info}>
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.message}</Text>
                  </View>
                  <Text>{item.Time}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Tab: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  Info: {
    flexDirection: "row",
    width: width - 150,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});

export default ListChats;
