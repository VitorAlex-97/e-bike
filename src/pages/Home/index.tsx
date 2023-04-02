import { Box } from "native-base";
import { DetailBackground } from "../../atomic/atoms/DetailBackgroun";
import { MainBanner } from "../../atomic/molecules/MainBanner";
import { Card } from "../../atomic/molecules/Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FlatList } from "react-native";
import { Header } from "../../atomic/molecules/Header";

export type CardProps = {
  id: string;
  title: string;
  price: number;
  model: string;
  image: string;
}
export function Home() {

  const [equipments, setEquipments] = useState<CardProps[]>([])

  useEffect(() => {
    
    async function getEquipaments() {
      try {
        const { data } = await api.get('equipments');
        setEquipments(data)

      } catch (error) {
        console.log(error)
      }
    }

    getEquipaments()

  }, [])

  return (
    <Box flex='1' padding='20px' pt='-10px' position='relative'>
      <DetailBackground />
      <FlatList
        ListHeaderComponent={() => 
          (
            <>
              <Header text="Choose your bike"/>
              <MainBanner />
            </>
          )
        }
        keyExtractor={item => item.id}
        data={equipments}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item: equipment }) => <Card title={equipment.title} image={equipment.image} id={equipment.id} price={equipment.price} model={equipment.model}/>}
      />
    </Box>
  )
}