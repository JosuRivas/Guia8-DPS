import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text,Image} from "react-native";
import {Card} from 'react-native-elements';

const Pais = ({resultado}) =>{
    const [info,setInfo] = useState([]);
    const [nombre,setNombre] = useState([]);
    const [arearegion,setArea] = useState([]);
    const [enlace,setEnlace] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/225px-Flag_of_El_Salvador.svg.png');

    const flags=[
            {
                nombre:'El Salvador',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/225px-Flag_of_El_Salvador.svg.png'
            },
            {
                nombre:'Honduras',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/203px-Flag_of_Honduras.svg.png'
            },
            {
                nombre:'Guatemala',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1280px-Flag_of_Guatemala.svg.png'
            },
            {
                nombre:'Nicarágua',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1280px-Flag_of_Nicaragua.svg.png'
            },
            {
                nombre:'Canadá',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png'
            },
            {
                nombre:'Estados Unidos da América',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'
            },
            {
                nombre:'México',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png'
            },
            {
                nombre:'Peru',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1280px-Flag_of_Peru_%28state%29.svg.png'
            },
            {
                nombre:'Panamá',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1280px-Flag_of_Panama.svg.png'
            },
            {
                nombre:'Costa Rica',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/225px-Flag_of_Costa_Rica.svg.png'
            },
            {
                nombre:'Argentina',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png'
            },
            {
                nombre:'Colômbia',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png'
            },
            {
                nombre:'Espanha',
                bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png'
            }

        
        
        
    ]
    
    useEffect(()=>{
        setInfo(resultado);

        Object.values(info).map(data => {
            setNombre(data.nome.abreviado);
            setArea(data.area.total);
            setEnlace(flags.find((country)=>country.nombre == data.nome.abreviado).bandera);
        });
    });
        return(
            <Card>
                <Card.Title>{nombre}</Card.Title>
                <Card.Divider />
                <View style={{justifyContent:'center'}}>
                     <Text style={{fontSize:20,textAlign:'center',fontWeight:"bold"}}>Area:{arearegion}km^2</Text>
                     <Image source={{uri:enlace}} style={{width: 300, height: 150}}/>
                </View>
            </Card> 
         )
};

export default Pais;