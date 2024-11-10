import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { Input } from "./input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";

export const ShareYourVision = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY as string;

  const schema = z.object({
    name: z.string().min(3, "Name is too short"),
    email: z.string().email("Invalid email address"),
    projectIdea: z.string().min(10, "Project idea is too short"),
    access_key: z.string().default(accessKey),
    xUsername: z.string().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(
      e.target.name as keyof z.infer<typeof schema>,
      e.target.value
    );
  };

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setLoading(true);

    trackEvent("Submit Vision Pressed", {
      Platform: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: data.access_key,
        name: data.name,
        email: data.email,
        message: data.projectIdea,
        X: data.xUsername,
      }),
    });
    const result = await response.json();
    if (result.success) {
      toast({ title: result.message, variant: "success" });
      form.reset();
    } else {
      toast({ title: result.message, variant: "destructive" });
      form.reset();
    }
    setLoading(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex gap-2 justify-center items-center py-2 max-sm:px-4 px-10 mt-5 text-lg tracking-tighter text-center bg-black rounded-xl ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit font-geist text-md text-white ring-white/80 ring-offset-black hover:scale-[1.02] active:scale-[0.98] active:ring-white/70">
          Share your vision
        </button>
      </DialogTrigger>
      <DialogContent className="bg-black w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Share your vision
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Tell us about your project idea. We&apos;ll get back to you soon!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col items-center justify-start w-full gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="bg-slate-800"
                      {...field}
                      onChange={onValueChange}
                      placeholder="John Doe"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="bg-slate-800"
                      {...field}
                      onChange={onValueChange}
                      placeholder="john.doe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectIdea"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Project Idea</FormLabel>
                  <FormControl>
                    <textarea
                      disabled={loading}
                      rows={3}
                      className="bg-slate-800 w-full px-3 py-2 rounded-xl text-sm flex border-none text-white shadow-input  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] 
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
                      {...field}
                      placeholder="Project Idea.."
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="xUsername"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>X (optional)</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="bg-slate-800"
                      {...field}
                      onChange={onValueChange}
                      placeholder="@username"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500 text-end" />
                </FormItem>
              )}
            />
            <button
              className="flex border rounded-xl w-full justify-center items-center h-10 bg-gradient-to-r from-sky-700 to-pink-700 mt-4 hover:from-sky-800 hover:to-pink-800 transition-colors duration-150 delay-150"
              type="submit"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Submit Your Vision"}
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
