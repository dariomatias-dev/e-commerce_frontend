'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import FormInput from '@/components/Forms/Fields/FormInput';
import FormInputPassword from '@/components/Forms/Fields/FormInputPassword';
import {
  LoginFormProps,
  schema,
} from '@/components/Forms/Schemas/LoginFormSchema';
import SubmitFormButton from '@/components/Forms/SubmitFormButton';
import RedirectionLoginRegistration from '@/components/RedirectionLoginRegistration';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const receiveFormData = (data: LoginFormProps) => {
    console.log(data);
  };

  return (
    <div className="mx-auto mb-20 mt-16 w-full max-w-[25rem]">
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-3xl font-semibold text-gray-700">
          Fazer login
        </h1>

        <p className="text-center text-sm">
          Preencha todos os campos abaixo corretamente
        </p>
      </div>

      <form
        onSubmit={handleSubmit(receiveFormData)}
        className="my-6 flex flex-col gap-6"
      >
        <FormInput
          inputName="E-mail"
          inputType="email"
          id="email"
          placeholder="matiasdario75@gmail.com"
          control={control}
          errors={errors}
        />

        <FormInputPassword
          inputName="Senha"
          id="password"
          control={control}
          errors={errors}
        />

        <SubmitFormButton text="Fazer login" />
      </form>

      <RedirectionLoginRegistration
        message="Não possui um cadastro?"
        pathName="/cadastro"
        linkName="Crie um"
      />
    </div>
  );
};

export default Login;
