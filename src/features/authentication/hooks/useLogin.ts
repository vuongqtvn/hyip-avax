import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useAuth } from "@/providers/auth-provider";

const FormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email is not correct format",
    })
    .min(1, {
      message: "Email is required",
    }),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters.",
    }),
});

export const useLogin = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);

    try {
      await login(data);

      setLoading(false);
    } catch (error: any) {
      if (error?.message?.email) {
        form.setError("email", error?.message?.email);
      }
      if (error?.message?.password) {
        form.setError("password", error?.message?.password);
      }

      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    loading,
  };
};
