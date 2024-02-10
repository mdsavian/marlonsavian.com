import type { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";

type ResponseData = {
  error?: boolean;
  success?: boolean;
  message: string;
};

type ErrorWith = {
  title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { email, nome, telefone, linkedin } = req.body;

  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY,
    server: process.env.NEXT_PUBLIC_MAIL_CHIMP_SERVER,
  });

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAIL_CHIMP_MENTORSHIP_ID_LIST || "",
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          NAME: nome,
          PHONE: telefone,
          LINKEDIN: linkedin,
        },
      }
    );
  } catch (err: unknown) {
    const knownError = err as ErrorWith;

    const message =
      knownError.title === "Member exists" ? "Usuário já cadastrado" : knownError.title;

    return res.status(400).send({ error: true, message });
  }

  return res.json({ success: true, message: "Usuário cadastrado com sucesso" });
}
