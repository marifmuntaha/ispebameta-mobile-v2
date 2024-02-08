import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";

const EvaluationScreen = ({navigation}) => {
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
    })
    const data = [
        {
            id: 1,
            name: 'Poin 1',
            desc: 'Guru menyusun perencanaan yang dapat menggambarkan proses pembelajaran yang efektif berbasis keunggulan Madrasah.',
            indicator: [
                {
                    id: 1,
                    code: 'A',
                    desc: 'Rencana pembelajaran guru belum menggambarkan proses pembelajaran yeng efetif serta belum berbasis keunggulan Madrasah'
                },
                {
                    id: 2,
                    code: 'B',
                    desc: 'Rencana pembelajaran guru belum menggambarkan proses pembelajaran yang efetif namun telah berbasis keunggulan Madrasah'
                },
                {
                    id: 3,
                    code: 'C',
                    desc: 'Rencana pembelajaran guru  sebagian mengindikasikan proses  pembelajaran dilakukan secara efektif namun  belum berbasis keunggulan Madrasah'
                },
                {
                    id: 4,
                    code: 'D',
                    desc: 'Rencana pembelajaran guru  sebagian mengindikasikan proses  pembelajaran dilakukan secara efektif namun  telah berbasis keunggulan Madrasah'
                },
                {
                    id: 5,
                    code: 'E',
                    desc: 'Rencana pembelajaran guru telah menggambarkan proses pembelajaran yeng efektif namun belum berbasis keunggulan Madrasah'
                },
                {
                    id: 6,
                    code: 'F',
                    desc: 'Rencana pembelajaran guru telah menggambarkan proses pembelajaran yeng efektif dengan memperhatikan basis keunggulan Madrasah'
                },

            ]
        },
        {
            id: 2,
            name: 'Poin 2',
            desc: 'Guru menyusun perencanaan pembelajaran yang mendukung terlaksananya pembelajaran kontekstual, kebermaknaan, humanis, metakognitif, moderat dan tercapainya misi madrasah.',
            indicator: [
                {
                    id: 1,
                    code: 'A',
                    desc: 'Rencana pembelajaran yang disusun oleh guru belum mendukung terlaksananya pembelajaran kontekstual, kebermaknaan, humanis, metakognitif, moderat dan tercapainya misi madrasah'
                },
                {
                    id: 2,
                    code: 'B',
                    desc: 'Rencana pembelajaran yang disusun oleh guru sebagian telah  mencerminkan pembelajaran kontekstual, bermakna, humanis, metakognitif serta moderat'
                },
                {
                    id: 3,
                    code: 'C',
                    desc: 'Rencana pembelajaran yang disusun oleh guru telah  mencerminkan pembelajaran kontekstual, bermakna, humanis,'
                },
                {
                    id: 4,
                    code: 'D',
                    desc: 'Rencana pembelajaran yang disusun oleh guru telah mendukung terlaksananya pembelajaran  kontekstual, bermakna, humanis, metakognitif'
                },
                {
                    id: 5,
                    code: 'E',
                    desc: 'Rencana pembelajaran yang disusun oleh guru telah mendukung terlaksananya pembelajaran  kontekstual, bermakna, humanis, metakognitif serta moderat'
                },
                {
                    id: 6,
                    code: 'F',
                    desc: 'Rencana pembelajaran yang disusun oleh guru telah mendukung terlaksananya pembelajaran  kontekstual, bermakna, humanis, metakognitif serta moderat dan tercapainya misi madrasah'
                },

            ]
        },
        {
            id: 3,
            name: 'Poin 3A',
            desc: 'Guru menyusun perencanaan pembelajaran yang menggambarkan terlaksananya pembelajaran abad 21 dengan memperhatikan penguatan pendidikan karakter dan akhlakul karimah,  Budaya Literasi, numerasi, sains dan sosial budaya, Berfikir Kritis, kolaboratif, komunikatif dan kreatif,  Terampil memecahkan Masalah',
            indicator: [
                {
                    id: 1,
                    code: 'A',
                    desc: 'Rencana pembelajaran yang disusun oleh guru belum mendukung terlaksananya pembelajaran abad 21  serta belum mendukung pengembangan  pendidikan karakter dan akhlaqul Karimah'
                },
                {
                    id: 2,
                    code: 'B',
                    desc: 'Rencana pembelajaran yang disusun oleh guru sebagian mendukung terlaksananya pembelajaran abad 21  dengan indikasi  aktifitas pengembangan pendidikan karakter dan Akhlaqul Karimah'
                },
                {
                    id: 3,
                    code: 'C',
                    desc: 'Rencana pembelajaran yang disusun oleh guru  telah mendukung terlaksananya pembelajaran abad 21  dengan indikasi  aktifitas pengembangan pendidikan karakter dan Akhlaqul Karimah'
                },

            ]
        }
    ]
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                backTo="SupervisiScreen"
                title="PENILAIAN"
                subtitle="Muhammad Arif Muntaha/Sejarah"
            />
            <View style={styles.formButton}>
                <Text style={styles.formButtonLabel}>RENCANA PEMBELAJARAN</Text>
            </View>
            <ScrollView style={content.container}>
                <Accordion data={data}/>
            </ScrollView>
        </View>
    )
}
export default EvaluationScreen;