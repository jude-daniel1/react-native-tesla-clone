import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function Extra() {
  const projects = [
    {
      id: 1,
      title: "Decision System for NYSC",
      department: "Computer Science",
      price: "4000",
      code: "EA459",
    },
    {
      id: 2,
      title: "Flood Prediction using artificial Neural Network",
      department: "Computer Science",
      price: "4000",
      code: "EC479",
    },
    {
      id: 3,
      title: "Geometric Analysis of Substance",
      department: "Electrical Engineering",
      price: "6000",
      code: "EA409",
    },
    {
      id: 4,
      title: "Economy of the Nation",
      department: "Economic",
      price: "4500",
      code: "ED459",
    },
    {
      id: 5,
      title: "Decision System for NYSC",
      department: "Computer Science",
      price: "4000",
      code: "EA459",
    },
    {
      id: 6,
      title: "Ascertain Marriage Compactibility between couples ",
      department: "Computer Science",
      price: "4000",
      code: "EAD59",
    },

    {
      id: 7,
      title: "Decision System for NYSC",
      department: "Computer Science",
      price: "4000",
      code: "EA459",
    },
    {
      id: 8,
      title: "Flood Prediction using artificial Neural Network",
      department: "Computer Science",
      price: "4000",
      code: "EC479",
    },
    {
      id: 9,
      title: "Geometric Analysis of Substance",
      department: "Electrical Engineering",
      price: "6000",
      code: "EA409",
    },
    {
      id: 10,
      title: "Economy of the Nation",
      department: "Economic",
      price: "4500",
      code: "ED459",
    },
    {
      id: 11,
      title: "Decision System for NYSC",
      department: "Computer Science",
      price: "4000",
      code: "EA459",
    },
    {
      id: 12,
      title: "Ascertain Marriage Compactibility between couples ",
      department: "Computer Science",
      price: "4000",
      code: "EAD59",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.cardHeader}>
              <View>
                <Text>Code: {item.code}</Text>
              </View>
              <View>
                <Text>Price: {item.price}</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <TouchableOpacity onPress={() => Alert.alert("You clicked Me")}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardFooter}>
              <Text>{item.department}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  cardBody: {
    borderWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
