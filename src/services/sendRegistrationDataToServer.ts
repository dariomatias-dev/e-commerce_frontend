import { LegalPersonFormProps } from '@/components/Forms/Schemas/LegalPersonFormSchema';
import { PhysicalPersonFormProps } from '@/components/Forms/Schemas/PhysicalPersonFormSchema';

const sendRegistrationDataToServer = async (
  formData: PhysicalPersonFormProps | LegalPersonFormProps,
) => {
  const { confirmPassword, ...data } = formData;

  const token = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  console.log(token);
};

export default sendRegistrationDataToServer;
