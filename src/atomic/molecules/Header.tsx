import { Box, Icon, Text } from "native-base";
import { GradientSquareButton } from "../atoms/GradientSquareButton";
import { AntDesign } from '@expo/vector-icons';

type Props = {
  text: string
}

export function Header({
  text
}: Props) {
  return (
    <Box 
      h='100px' 
      alignItems='center' 
      mt='26' 
      justifyContent='space-between' 
      flexDirection='row'
    >
      <Text 
        fontSize='lg' 
        fontWeight='bold' 
        color='white'
      >
        {text}      
      </Text>
      <GradientSquareButton>
        <Icon as={AntDesign} name="search1" color="white" />
      </GradientSquareButton>
    </Box>
  )
}