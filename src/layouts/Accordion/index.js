import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import Radio from "../Radio";
const Accordion = ({navigation, data, result, setResult}) => {
    const [showID, setShowID] = useState(1);
    const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    });
    useEffect(() => {
        console.log(data)
    }, []);
    const content = StyleSheet.create({
        container: {
            padding: 20
        },
        box: {
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 30,
            width: "100%",
            height: 70,
            backgroundColor: '#E9EAEC',
            marginBottom: 20
        },
        boxContent: {
            flexDirection: "row"
        },
        boxText: {
            marginLeft: 20,
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
        boxButton: {
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 20,
            borderColor: "#07F136",
            borderWidth: 3,
            alignSelf: "center",
            alignItems: 'center',
            justifyContent: 'center'
        },
        open: {
            width: "100%",
            backgroundColor: '#E9EAEC',
            borderRadius: 20,
            marginBottom: 20,
        },
        boxOpen: {
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            height: 70,
        },
        boxContentOpen: {
            flexDirection: "row"
        },
        boxTextOpen: {
            marginLeft: 20,
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
        boxButtonOpen: {
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 20,
            borderColor: "#07F136",
            borderWidth: 3,
            alignSelf: "center",
            alignItems: 'center',
            justifyContent: 'center'
        },
        boxTextContentOpen: {
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            alignItems: 'flex-start',
            justifyContent: 'center'
        }
    });
    return (
        <View style={styles.container}>
            {data && data.map((item) => (
                <View key={item.id}>
                    {item.id !== showID && (
                        <TouchableOpacity onPress={() => setShowID(item.id)} style={content.box}>
                            <View style={content.boxContent}>
                                <View style={content.boxTextOpen}>
                                    <Text style={{fontWeight: 'bold', fontSize: 20, color: "#161D6F"}}>POIN {item.name}{item.sub}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={content.boxButton}
                                              onPress={() => navigation.replace('EvaluationScreen')}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    color: '#07F136'
                                }}>A</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                    {item.id === showID && (
                        <View>
                            <View style={content.open}>
                                <View style={content.boxOpen}>
                                    <View style={content.boxContentOpen}>
                                        <View style={content.boxTextOpen}>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                color: "#161D6F"
                                            }}>POIN {item.name}{item.sub}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={content.boxButtonOpen}
                                                      onPress={() => navigation.replace('EvaluationScreen')}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 25,
                                            color: '#07F136'
                                        }}>A</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={content.boxTextContentOpen}>
                                    <Text style={{fontSize: 18, color: "#161D6F"}}>{item.desc}</Text>
                                </View>
                            </View>
                            <View style={content.open}>
                                <View style={content.boxOpen}>
                                    <View style={content.boxContentOpen}>
                                        <View style={content.boxTextOpen}>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                color: "#161D6F"
                                            }}>INDIKATOR</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={content.boxTextContentOpen}>
                                    <Radio
                                        data={item.indicators}
                                        instrument={{
                                            id: item.id,
                                            name: item.name
                                        }}
                                        result={result}
                                        setResult={setResult}

                                    />
                                </View>
                            </View>
                            <View style={content.open}>
                                <View style={content.boxOpen}>
                                    <View style={content.boxContentOpen}>
                                        <View style={content.boxTextOpen}>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                color: "#161D6F"
                                            }}>REKOMENDASI</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={content.boxTextContentOpen}>
                                    <Text style={{fontSize: 18, color: "#161D6F"}}>{data.reference}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            ))}
        </View>
    )
}
export default Accordion;