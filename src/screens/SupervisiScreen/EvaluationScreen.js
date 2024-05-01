import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../layouts/Header";
import Accordion from "../../layouts/Accordion";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserScreen/UserContext";
import {actionType, Dispatch} from "../../reducer";

const EvaluationScreen = ({route, navigation}) => {
    const user = useContext(UserContext);
    const {aspectID, teacherID} = route.params;
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        formButton: {
            width: "90%",
            backgroundColor: "#FFC14F",
            borderRadius: 30,
            height: 60,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20
        },
        formButtonLabel: {
            fontWeight: 'bold',
            color: "white",
            fontSize: 18
        }
    });
    const content = StyleSheet.create({
        container: {
            padding: 20
        }
    });
    const [evaluation, setEvaluation] = useState([]);
    const [data, setData] = useState([])
    const [aspect, setAspect] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [instruments, setInstruments] = useState([]);
    const [instrument, setInstrument] = useState([]);
    const [reference, setReference] = useState([]);
    const [result, setResult] = useState([]);
    useEffect(() => {
        Dispatch(actionType.EVALUATION_GET, {setData: setEvaluation}, {teacher: teacherID, aspect: aspectID}).then();
        Dispatch(actionType.ASPECT_SHOW, {setData: setAspect}, {id: aspectID}).then();
        Dispatch(actionType.TEACHER_SHOW, {setData: setTeacher}, {id: teacherID}).then();
        Dispatch(actionType.INSTRUMENT_GET,
            {setData: setInstruments},
            {aspect: aspectID, with: 'indicator'}).then(resp => setData(resp));
    }, []);
    useEffect(() => {
        setReference(() => {
            return result.filter((value) => {
                return value.instrument === instrument.id
            })
        })
    }, [result, instrument]);
    useEffect(() => {
        setResult(() => {
            return evaluation.length > 0 ? JSON.parse(evaluation[0].result) : [];
        });
    }, [evaluation]);
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="SupervisiScreen"
                title="PENILAIAN"
                subtitle={teacher.name + "/" + teacher.subject}
            />
            <View style={styles.formButton}>
                <Text style={styles.formButtonLabel}>{aspect.name}</Text>
            </View>
            <ScrollView style={content.container}>
                <Accordion data={data} result={result} setResult={setResult}/>
                <TouchableOpacity
                    onPress = {() => {
                        evaluation.length > 0
                            ? Dispatch(actionType.EVALUATION_UPDATE, {
                                formData: {
                                    id: evaluation[0].id,
                                    user: user.id,
                                    teacher: teacherID,
                                    aspect: aspectID,
                                    finish: 0,
                                    result: JSON.stringify(result)
                                }
                            }).then()
                            : Dispatch(actionType.EVALUATION_STORE, {
                                formData: {
                                    user: user.id,
                                    teacher: teacherID,
                                    aspect: aspectID,
                                    finish: 0,
                                    result: JSON.stringify(result)
                                }
                            }).then()
                    }}
                    style={styles.formButton}>
                    <Text style={styles.formButtonLabel}>SIMPAN</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default EvaluationScreen;