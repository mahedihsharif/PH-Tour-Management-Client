import z from "zod";

export const divisionZodSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  file: z.instanceof(File).optional(),
});
