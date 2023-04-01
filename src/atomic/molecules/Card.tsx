import { Box, Image, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CardProps } from '../../pages/Home';
import { TextAlpha50 } from '../atoms/TextAlpha50';


export function Card({
  id,
  model,
  image,
  price,
  title
}: CardProps) {
  return (
    <TouchableOpacity
      style={{ padding: 5, width: '50%', height: 240, opacity: 0.9 }}
      onPress={() => {}}
    >
      <Box 
        borderRadius='20px'
        h='241px'
        p='4'
        flex='1'
        shadow='5'
        bg='primary.50:alpha.9'
        justifyContent='center'
        alignItems='center'
      >
        <Image 
          alt='image of card'
          w='121px'
          h='80px'
          resizeMode='contain'
          src={image}
        />
        <Box mt='17px'>
          <TextAlpha50 text={title} />
          <Text fontSize='md' bold color='white'> { model }</Text>
          <TextAlpha50 text={`R$ ${price}`} />
        </Box>
      </Box>
    </TouchableOpacity>
  )
}