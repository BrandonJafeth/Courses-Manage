import { z } from "zod";

const courseSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long ⚠ ' }).max(200),
  status: z.boolean(),
  maximun_quota: z.string().min(1, { message: 'Maximum quota must be at least 1 character long  ⚠ ' }).transform(value => parseInt(value, 10)),
  professor: z.string().min(3, { message: 'Professor name must be at least 3 characters long  ⚠' }).max(200),
  course_code: z.string()
  .min(3, { message: 'Course code must be at least 3 characters long ⚠ ' })
  .max(200)
  .refine(code => {
    const prefix = code.slice(0, 3);
    const suffix = code.slice(3);
    return prefix === prefix.toUpperCase() && /^\d+$/.test(suffix);
  }, { message: 'Course code must start with 3 uppercase letters followed by numbers  ⚠' }),
  classroom_number: z.string().min(1, { message: 'Classroom number must be at least 1 character long ⚠' }).transform(value => parseInt(value, 10)),
});

export default courseSchema;