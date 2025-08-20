import SingleImageUploader from "@/components/SingleImageUploader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { globalErrorResponse } from "@/helpers/errors/globalError";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";
import { divisionZodSchema } from "@/validation/division.validation";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export function AddDivisionModal() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [addDivision] = useAddDivisionMutation();

  const form = useForm<z.infer<typeof divisionZodSchema>>({
    resolver: zodResolver(divisionZodSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof divisionZodSchema>) => {
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    formData.append("file", image as File);
    const toastId = toast.loading("Creating a Division...");
    try {
      const res = await addDivision(formData).unwrap();
      if (res?.success) {
        toast.success(res.message, { id: toastId });
      }
      setOpen(false);
    } catch (error) {
      if (error) {
        const err = globalErrorResponse(error);
        toast.error(err?.data.message, { id: toastId });
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Add Division</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Division</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-5"
            id="add-division"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Tour Type Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>

          <SingleImageUploader onChange={setImage} />
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={!image}
            type="submit"
            form="add-division"
            className="cursor-pointer"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
