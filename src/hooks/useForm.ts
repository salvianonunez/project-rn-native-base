import { useEffect, useState } from "react";
import { FormData, FormErrors } from '../interfaces/FormData';
import { isEmptyString, validStringLength, validStringRange } from '../utils/validations';

export const useForm = () =>{
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastName: '',
    cedula: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  
  const [isValidForm, setIsValidForm] = useState(true);

  useEffect(()=> {
    const { name, lastName, cedula } = formErrors;
    const isValid = !name && !lastName && !cedula;
    setIsValidForm(isValid);
  }, [formErrors]);

  const setName = (name: string) => {
    setFormData({...formData, name });
    validName(name);
  };

  const setLastName = (lastName: string) => {
    setFormData({...formData, lastName });
    validLastName(lastName);
  };

  
  const setCedula = (cedula: string) => {
    setFormData({...formData, cedula});
    validCedula(cedula);
  }

  const validLastName = (lastName:string) => {
    if (isEmptyString(lastName)){
      setFormErrors({...formErrors, lastName: 'campo requerido'});
      return false;
    }
    setFormErrors({...formErrors, lastName: undefined});
    return true;
  }

  const validCedula = (cedula:string) => {
    if(isEmptyString(cedula)){
      setFormErrors({...formErrors, cedula: undefined});
      return true;
    }
    if (validStringLength(cedula, 10)){
      setFormErrors({...formErrors, cedula: 'Cedula debe tener 10 caracteres'});
      return false;
    }
    setFormErrors({...formErrors, cedula: undefined});
    return true;
  };


  const validName = (name:string) => {
    if (isEmptyString(name)){
      setFormErrors({...formErrors, name: 'campo requerido'});
      return false;
    }
    setFormErrors({...formErrors, name: undefined});
    return true;
  };

  const validateForm = () => {
    const { name, lastName, cedula} = formData;
    const isValid = validName(name) && validLastName(lastName) && validCedula(cedula);
    setIsValidForm(isValid);
    return isValid;
  };

  return{
    formData,
    setName, setLastName, setCedula,
    validateForm,
    formErrors,
    isValidForm
  };
};