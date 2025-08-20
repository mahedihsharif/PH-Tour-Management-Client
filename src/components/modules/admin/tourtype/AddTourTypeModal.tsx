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
import { globalErrorResponse } from "@/helpers/errors/globalError";
import { useAddTourTypeMutation } from "@/redux/features/tour/tour.api";
import { tourTypeZodSchema } from "@/validation/tour.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

const AddTourTypeModal = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof tourTypeZodSchema>>({
    resolver: zodResolver(tourTypeZodSchema),
    defaultValues: {
      name: "",
    },
  });
  const [addTourType] = useAddTourTypeMutation();

  const onSubmit = async (data: z.infer<typeof tourTypeZodSchema>) => {
    try {
      const res = await addTourType({ name: data.name }).unwrap();
      if (res.success) {
        toast.success(res.message);
        setOpen(!open);
      }
    } catch (error) {
      if (error) {
        const err = globalErrorResponse(error);
        toast.error(err && err.data.message);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer">Add Tour Type</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Tour Type</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form id="add-tour-type" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour Type Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tour Type Name"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              form="add-tour-type"
              className="cursor-pointer"
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
export default AddTourTypeModal;
