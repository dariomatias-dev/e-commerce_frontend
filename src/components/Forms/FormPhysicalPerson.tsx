import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormCheckboxes from './Fields/FormCheckboxes';
import FormInput from './Fields/FormInput';
import FormInputPassword from './Fields/FormInputPassword';
import {
  schema,
  PhysicalPersonFormProps,
} from './Schemas/PhysicalPersonFormSchema';
import SubmitFormButton from './SubmitFormButton';

import sendRegistrationDataToServer from '@/services/sendRegistrationDataToServer';

const FormPhysicalPerson = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      termsOfUse: true,
    },
    resolver: yupResolver(schema),
  });

  const receiveFormData = async (formData: PhysicalPersonFormProps) => {
    const [day, month, year] = formData.dateOfBirth.split('/');
    const dateObject = new Date(+year, +month - 1, +day);
    dateObject.setUTCHours(0, 0, 0, 0);
    const dateOfBirth = dateObject.toISOString();
    const data = { ...formData, dateOfBirth };

    sendRegistrationDataToServer(data);
  };

  return (
    <form
      onSubmit={handleSubmit(receiveFormData)}
      className="flex flex-col gap-6"
    >
      <div className="flex gap-4">
        <FormInput
          inputName="Nome"
          id="firstName"
          placeholder="Dário"
          control={control}
          errors={errors}
        />

        <FormInput
          inputName="Sobrenome"
          id="lastName"
          placeholder="Matias"
          control={control}
          errors={errors}
        />
      </div>

      <div className="flex gap-4">
        <FormInput
          inputName="Data de Nascimento"
          id="dateOfBirth"
          placeholder="06/03/2005"
          control={control}
          errors={errors}
        />

        <FormInput
          inputName="Telefone Celular"
          id="phone"
          placeholder="+55 83 98640-4371"
          control={control}
          errors={errors}
        />
      </div>

      <div className="flex gap-4">
        <FormInput
          inputName="CPF"
          id="cpf"
          placeholder="123.456.789-01"
          control={control}
          errors={errors}
        />

        <FormInput
          inputName="RG"
          id="rg"
          placeholder="12.345-6"
          control={control}
          errors={errors}
        />
      </div>

      <FormInput
        inputName="E-mail"
        id="email"
        placeholder="matiasdario75@gmail.com"
        maxLength={30}
        control={control}
        errors={errors}
      />

      <div className="flex gap-4">
        <FormInput
          inputName="Estado"
          id="state"
          placeholder="Paraíba"
          control={control}
          errors={errors}
        />

        <FormInput
          inputName="Cidade"
          id="city"
          placeholder="Areial"
          control={control}
          errors={errors}
        />
      </div>

      <div className="flex gap-4">
        <FormInput
          inputName="Endereço"
          id="address"
          placeholder="Rua São José, 811, Bairro Centro"
          maxLength={40}
          control={control}
          errors={errors}
        />

        <FormInput
          inputName="CEP"
          id="cep"
          placeholder="58140-000"
          control={control}
          errors={errors}
        />
      </div>

      <div className="flex gap-4">
        <FormInputPassword
          inputName="Senha"
          id="password"
          control={control}
          errors={errors}
        />

        <FormInputPassword
          inputName="Confirmar senha"
          id="confirmPassword"
          control={control}
          errors={errors}
        />
      </div>

      <FormCheckboxes register={register} errors={errors} />

      <SubmitFormButton text="Criar conta" />
    </form>
  );
};

export default FormPhysicalPerson;
