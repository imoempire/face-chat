import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Switch } from "react-native-switch";
import DropDownItem from "react-native-drop-down-item";
const statusHeight = getStatusBarHeight();

const Settijngs = () => {
  const [isNotification, setIsNotification] = useState(false);
  const [dark, setDark] = useState(false);
  const toggleNotification = () =>
    setIsNotification((previousState) => !previousState);
  const toggleDark = () => setDark((previousState) => !previousState);

  const data = [
    {
      name: "Notification",
      icon: MaterialIcons,
      iconName: "account-circle",
    },
    {
      name: "dark",
      icon: Feather,
      iconName: "settings",
    },
  ];
  const downData = [
    {
      title: "Title 1",
      body: "Hi. I love this component. What do you think?",
    },
    {
      title: "See this one too",
      body: "Yes. You can have more items.",
    },
    {
      title: "Thrid thing",
      body: "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 100 }}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
        />
        <Text style={{ fontSize: 20 }}>Helena Marks</Text>
      </View>
      <View style={styles.Tabs}>
        {/* Account */}
        <View style={styles.Tab}>
          <MaterialIcons name="account-circle" size={20} color={"black"} />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 20 }}>Account</Text>
          </View>
        </View>
        {/* Settings */}
        <View>
          {/* Tab */}
          <View style={styles.Tab}>
        <Feather name="settings" size={20} color={"black"} />
          <View style={{paddingHorizontal: 10}}>
          <Text style={{ fontSize: 20 }}>Settings</Text>
          </View>
          </View>
          {/* End  */}
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.index}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      paddingVertical: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: 'space-between'
                    }}
                  >
                    <View style={{ paddingHorizontal: 10 }}>
                      <Text>{item.name}</Text>
                    </View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={setDark ? "#f5dd4b" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleDark}
                      value={dark}
                    />
                  </View>
                );
              }}
            />
            {downData ? (
              downData.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    // contentVisible={false}
                    // invisibleImage={IC_ARR_DOWN}
                    // visibleImage={IC_ARR_UP}
                    header={
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "blue",
                          }}
                        >
                          {param.title}
                        </Text>
                      </View>
                    }
                  >
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        },
                      ]}
                    >
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
            ) : (
              <Text>Man</Text>
            )}
          </View>
        </View>
        {/* Contact */}
        <View style={styles.Tab}>
          <MaterialIcons name="account-circle" size={20} color={"black"} />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 20 }}>Contact Us</Text>
          </View>
        </View>
        {/* Logout */}
        <View style={styles.Tab}>
          <AntDesign name="logout" size={24} color="black" />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 20 }}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight + 20,
  },
  Image: {
    flex: 0.3,
    alignItems: "center",
  },
  Tabs: {
    flex: 1,
    marginHorizontal: 30,
  },
  Tab: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
});

export default Settijngs;
