import React from 'react'
import { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, View } from "react-native";
import { Title } from "react-native-paper";
import CoinCard from './CoinCard';
import Axios from 'axios'
export default function CurrencyList() {
    const [Data, setData] = useState<any[]>([])
    useEffect(() => {
        async function getData() {
            let cryptoData = await Axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=EUR", {
                headers: { "X-CMC_PRO_API_KEY": "YOUR API KEY" }
            });
            setData(cryptoData.data.data)
        }
        getData()

    }, []);

    if (Data.length == 0) {
        return (
            <View style={{ display: "flex", flex: 1, justifyContent: "center", alignContent: "center" }}><ActivityIndicator /></View>)
    }

    return (
        <View>
            <Title style={{textAlign : "center", marginTop: 35 }}>Coin Master</Title>
            <ScrollView style={{ marginTop: 20 }} >
                {
                    Data.map((e, i) => {
                        return <CoinCard id={e.id} key={i} symbol={e.symbol} coin_name={e.name} price_usd={e.quote.EUR.price} percent_change_24h={e.quote.EUR.percent_change_24h} percent_change_7d={e.quote.EUR.percent_change_7d} />
                    })
                }
            </ScrollView>
        </View>
    )


}
