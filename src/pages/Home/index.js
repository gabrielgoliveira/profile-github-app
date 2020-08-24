import React from 'react';
import {View, Text, TextInput, Button} from 'react-native'

export default function Home({navigation}){
    //definindo o state input com Hooks
    const [input, setInput] = React.useState('');
    
    //definindo o style da tela
    const style = {
        inputForm : { 
            height: 40, 
            width: "90%", 
            borderColor: 'gray', 
            borderWidth: 1,

            /*Meus Estilos */
            borderRadius: 10,
            backgroundColor: "#666",

            marginTop: 10,
            marginBottom: 10
        },
        fontInput: {
            color: "#fff",
            fontFamily: "Arial",
            fontSize: 20
        },
        title : {
            display: "flex"
        },
        viewStyle : {    
            /*Posicionamento dos elementos */
            display: "flex",
            alignItems:"center",
            justifyContent: "center",

            /*Tamanho */
            height: "100%",

            /*Cor */
            backgroundColor: "#333"
        
            
        }
    }

    return(
        //renderizando elemento
        <View style={style.viewStyle}>
            <View style = {style.title}>
                <Text style={style.fontInput}>Digite o seu User do Github</Text>
            </View>
            <TextInput
                style={style.inputForm}
                onChangeText={(text) => {
                        setInput(text)
                        console.log(text)
                    }
                }
                value={input}
            />

            <Button
                title = "Search"
                //redirecionando o usuário para a proxima tela
                onPress={() => navigation.navigate('Profile', {
                    userName: input
                })}
            />

        </View>
    );
}
