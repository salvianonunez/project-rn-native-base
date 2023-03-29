import React from 'react';
import { Text, Input, Box, Heading, Select, Center } from 'native-base';

const FormularioExample = () => {
  const [genero, setGenero] = React.useState('');
  return (
    <Center
    height={'100%'}
    backgroundColor={'black'}
    >
      <Box>
        <Heading
        marginTop={'15'}
        fontFamily={'heading'}
        fontStyle={'-moz-initial'}
        fontSize={'2xl'}
        color={'white'}
        alignContent={'center'}
        textAlign={'center'}
        >
        Formulario de Registro
        </Heading>
      </Box>
      <Box>
        <Text
          mx="7"
          fontFamily={'heading'}
          fontStyle={'-moz-initial'}
          fontSize={'lg'}
          color={'white'}
          textAlign={'left'}
        >
        Nombre
        </Text>
        <Input
          backgroundColor={'white'}
          mx="2" w="90%" size="md"
          variant="rounded"
          placeholder="Ingrese sus nombres completos"
        />
      </Box>

      <Box>
        <Text
          mx="7"
          fontFamily={'heading'}
          fontStyle={'-moz-initial'}
          fontSize={'lg'}
          color={'white'}
          textAlign={'left'}
        >
        Apellidos
        </Text>
        <Input
          backgroundColor={'white'}
          mx="2" w="90%" size="md"
          variant="rounded"
          placeholder="Ingrese sus apellidos "
        />
      </Box>

      <Box>
        <Text
          mx="7"
          fontFamily={'heading'}
          fontStyle={'-moz-initial'}
          fontSize={'lg'}
          color={'white'}
          textAlign={'left'}
        >
        Genero
        </Text>
        <Select
        selectedValue={genero}
        minWidth="200"
        color={'black'}
        backgroundColor={'white'}
        mx="3" w="70%" size="md"
        placeholder="Seleccione su género"
        mt={1} onValueChange={itemValue => setGenero(itemValue)}
        >
          <Select.Item label="Masculino" value="masculino" />
          <Select.Item label="Femenino" value="femenino" />
        </Select>
      </Box>

    </Center>

  );
  };

export default FormularioExample;
