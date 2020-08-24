import React from 'react';

import {View, Text, Image} from 'react-native';

import axios from 'axios'

export default function Home({route}){
    //definindo o state userData
    const [userData, setUserData] = React.useState({            
        login: '',
        id: '',
        avatar_url: 'https://reactjs.org/logo-og.png',
        name: '',
        company: '',
        location:'',
        bio: ''
    });

    //definição do style da tela
    const style = {
        fontTitleProfile :{
            color: "#fff",
            fontFamily: "Arial",
            fontSize: 30
        },
        titleProfile :{
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
        }, descProfile : {
            padding: 20
        },
        fontStyle : {
            color: "#fff",
            fontFamily: "Arial",
            fontSize: 20
        },
        viewStyle : {    
            /*Posicionamento dos elementos */
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            /*Tamanho */
            height: "100%",
            /*Cor */
            backgroundColor: "#333",
        },
        tinyLogo: {
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius: 200
        }
    }


    React.useEffect(() => {
        //função sera executada quando o componente for renderizado pela primeira vez em tela
        async function fetchData(){
            /*
                - fazendo request para a API do Github
                - route.params.userName é um atributo obtido da tela de formulário
            */
            const response = await axios.get(`https://api.github.com/users/${route.params.userName}`)
            
            //gravando o state
            setUserData(response.data)
        }
        fetchData();
    }, []);

    return(
        <View style={style.viewStyle}>
            <Image style={style.tinyLogo}
                source={{uri: userData.avatar_url}}
            />
            <View style={style.titleProfile}>
                <Text style={style.fontTitleProfile}>{userData.name}</Text>                
            </View>
            <View style={style.descProfile}>
                <Text style={style.fontStyle}>Bio : {userData.bio}</Text>
                <Text style={style.fontStyle}>Company : {userData.company}</Text>
                <Text style={style.fontStyle}>Location : {userData.location}</Text>
                <Text style={style.fontStyle}>Número de Repositórios Publicos: {userData.public_repos}</Text>    
            </View>
            
        </View>
    );
}
