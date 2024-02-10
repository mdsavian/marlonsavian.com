import * as yup from "yup";

export type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  linkedin: string;
};

const phoneRegExp = /^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$/;

export const schema = yup
  .object()
  .shape({
    nome: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    telefone: yup
      .string()
      .required("Campo obrigatório")
      .test("isValidPhoneNumber", "Telefone inválido", (value) =>
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/.test(value)
      ),
    linkedin: yup
      .string()
      .required("Campo obrigatório")
      .test("isLinkedin", "Linkedin inválido", (value) =>
        /linkedin\.com\/in\/[a-zA-Z0-9-]+/.test(value)
      ),
  })
  .required();
