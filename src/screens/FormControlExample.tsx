import React from 'react';
import { Box, Center, FormControl, Stack, Input, WarningOutlineIcon, Button} from 'native-base';
import { SafeAreaView } from 'react-native';
import { useForm } from '../hooks/useForm';

const {ErrorMessage, HelperText, Label} = FormControl;




const FormControlExample = () => {

  const {formData, setName, setLastName, formErrors, validateForm, isValidForm, setCedula} = useForm();
  const { name, lastName, cedula } = formData;
  
  const onSubmit = () => {
    const isValid = validateForm();
    if (isValid){
      console.log('data', name);
      return;
    }
    console.log('There are errors');
  };

  console.log('')
  return (
    <SafeAreaView>
      <Center height='100%'>
            <Box w='100%' maxWidth='80'>
              <FormControl isRequired isInvalid={'name' in formErrors}>

                <Stack mx='4'>
                  <Label>Nombre</Label>
                  <Input type='text' placeholder='Ingrese su nombre'
                  focusOutlineColor={'name' in formErrors ? 'red.700' : undefined }
                  value={name}
                  onChangeText={(text)=>setName(text)}/>
                  {'name' in formErrors &&
                    <ErrorMessage>
                      {formErrors.name}</ErrorMessage>}
                </Stack>
              </FormControl>

              <FormControl isRequired isInvalid={'lastName' in formErrors}>
                <Stack mx='4'>
                  <Label>Apellido</Label>
                  <Input type='text' placeholder='ingrese un apellido'
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                  />
                    {'lastName' in formErrors &&
                    <ErrorMessage>
                      {formErrors.lastName}</ErrorMessage>}
                </Stack>
              </FormControl>

              <FormControl isInvalid={'cedula' in formErrors}>
                <Stack mx='4'>
                  <Label>Cedula</Label>
                  <Input type='text' placeholder='ingrese su numero de ceudla'
                  value={cedula}
                  onChangeText={(text) => setCedula(text)}
                  />
                    {'cedula' in formErrors &&
                    <ErrorMessage>
                      {formErrors.cedula}</ErrorMessage>}
                </Stack>
              </FormControl>

              <Button onPress={onSubmit} mt='5' colorScheme='blue' isDisabled={!isValidForm}>
                Submit
              </Button>

            </Box>
      </Center>
    </SafeAreaView>
  );
};

export default FormControlExample;
