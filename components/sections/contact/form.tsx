"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { TbSend } from "react-icons/tb";

type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(2).max(10),
  email: z.string().email(),
  description: z.string().min(3).max(500),
});

export default function ContactForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-[500px]">
      <h1 className="text-base mb-7 font-medium text-center">Contact directly</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 flex flex-col gap-5 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input className="peer" {...field} />
                </FormControl>
                <FormLabel className="absolute left-4 top-2.5 transform peer-focus:-translate-y-[25px] bg-white dark:bg-slate-950 peer-focus:px-1 cursor-text transition duration-300 font-normal peer-focus:scale-90 peer-focus:left-3 peer-focus:text-black peer-focus:dark:text-white text-neutral-500 dark:text-gray-400">
                  Name
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input className="peer" {...field} />
                </FormControl>
                <FormLabel className="absolute left-4 top-2.5 transform peer-focus:-translate-y-[25px] bg-white dark:bg-slate-950 peer-focus:px-1 cursor-text transition duration-300 font-normal peer-focus:scale-90 peer-focus:left-3 peer-focus:text-black peer-focus:dark:text-white text-neutral-500 dark:text-gray-400">
                  Email
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Textarea className="min-h-[200px] pt-3.5 peer" {...field} />
                </FormControl>
                <FormLabel className="absolute left-4 top-2.5 transform peer-focus:-translate-y-[25px] bg-white dark:bg-slate-950 peer-focus:px-1 cursor-text transition duration-300 font-normal peer-focus:scale-90 peer-focus:left-3 peer-focus:text-black peer-focus:dark:text-white text-neutral-500 dark:text-gray-400">
                  Description
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 dark:bg-white
             dark:hover:bg-white-200 py-4 px-6 rounded-2xl w-fit text-white dark:text-black
              transition duration-500"
          >
            Send Message
            <TbSend className="text-lg" />
          </button>
        </form>
      </Form>
    </div>
  );
}
