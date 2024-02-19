import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const Radio = ({data, instrument, result, setResult}) => {
    const styles = StyleSheet.create({
        form: {
            flexDirection: "row",
            alignItems: 'center',
            marginRight: 30,
        },
        radio: {
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#161D6F',
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioSelected: {
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#161D6F',
        },
        radioLabel: {
            marginLeft: 10,
            marginBottom: 10,
            fontSize: 18,
            color: '#161D6F'
        }
    })
    const [radioSelected, setRadioSelected] = useState(1);
    return (
        <View>
            {data && data.map((item) => (
                <View key={item.id}>
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            setRadioSelected(item.id);
                            let value = result.filter((value) => {
                                return value.instrument !== instrument.id
                            });
                            value.push({
                                instrument: instrument.id,
                                name: instrument.name,
                                indicator: item,
                            });
                            setResult(value);
                            console.log(item);
                        }}
                        style={styles.form}
                    >
                        <View style={styles.radio}>
                            {radioSelected === item.id && (
                                <View style={styles.radioSelected}/>
                            )}
                        </View>
                        <Text style={styles.radioLabel}>{item.desc}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}
export default Radio;