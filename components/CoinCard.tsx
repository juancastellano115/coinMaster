import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Card } from 'react-native-paper'
type CardProps = {
    id : Number,
    symbol: string,
    price_usd: string,
    percent_change_24h: Number,
    percent_change_7d: Number
    coin_name: string
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: "row"
    },
    containerCoin: {
        display: 'flex',
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,

        flexDirection: "column"
    },
    upperRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: 'bold'
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    separator: {
        marginTop: 10
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontWeight: 'bold'
    },
    image: {
        width: 35,
        height: 35
    },
    statisticsContainer: {
        display: 'flex',
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 5,
        flexDirection: "row"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChange24h: {
        marginLeft: 50
    },
    percentChange7d: {
        marginLeft: 'auto'
    }
});

const {
    container,
    containerCoin,
    image,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    separator,
    percentChangePlus,
    percentChangeMinus,
    percentChange24h,
    percentChange7d
} = styles;

const CoinCard = ({ id, symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }: CardProps) => {
    
    return (
        <Card elevation={1} style={container}>
            <Card.Content>
                <View style={containerCoin}>
                    <View style={upperRow}>
                        <Image
                            style={image}
                            source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png` }}
                        />
                        <Text style={coinSymbol}>{symbol}</Text>
                        <Text style={separator}>|</Text>
                        <Text style={coinName}>{coin_name}</Text>
                        <Text style={coinPrice}>{(Number(price_usd)).toFixed(1)} €</Text>
                    </View>

                    <View style={statisticsContainer}>
                        <Text style={percentChange24h}>24h:
          <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_24h.toFixed(3)} % </Text>
                        </Text>
                        <Text style={percentChange7d}>7d:
          <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_7d.toFixed(3)} % </Text>
                        </Text>
                    </View>


                </View>
            </Card.Content>
        </Card>

    )
};

export default CoinCard;