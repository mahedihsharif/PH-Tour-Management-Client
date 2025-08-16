import z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        error: "Name must be at least 2 characters long.",
      })
      .max(30, { error: "Name cannot exceed 30 characters." }),
    email: z.email(),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])/, {
        error: "Password must contain at least 1 uppercase character.",
      })
      .regex(/^(?=.*[a-z])/, {
        error: "Password must contain at least 1 lowercase character.",
      })
      .regex(/^(?=.*\d)/, {
        error: "Password must contain at least 1 number.",
      })
      .regex(/^(?=.*[!@#$%^&*])/, {
        error: "Password must contain at least 1 special character.",
      }),
    confirmPassword: z
      .string()
      .min(8, { error: "Confirm Password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])/, {
        error: "Confirm Password must contain at least 1 uppercase character.",
      })
      .regex(/^(?=.*[a-z])/, {
        error: "Confirm Password must contain at least 1 lowercase character.",
      })
      .regex(/^(?=.*\d)/, {
        error: "Confirm Password must contain at least 1 number.",
      })
      .regex(/^(?=.*[!@#$%^&*])/, {
        error: "Confirm Password must contain at least 1 special character.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters long." })
    .regex(/^(?=.*[A-Z])/, {
      error: "Password must contain at least 1 uppercase character.",
    })
    .regex(/^(?=.*[a-z])/, {
      error: "Password must contain at least 1 lowercase character.",
    })
    .regex(/^(?=.*\d)/, {
      error: "Password must contain at least 1 number.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      error: "Password must contain at least 1 special character.",
    }),
});
