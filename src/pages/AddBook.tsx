import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import type { IBook } from "@/types";

const AddBook = () => {
  type TBookForm = Omit<IBook, "_id" | "createdAt" | "updatedAt">;
  const navigate = useNavigate();

  const form = useForm<TBookForm>({
    defaultValues: {
      title: "",
      author: "",
      genre: "FICTION",
      isbn: "",
      description: "",
      copies: 1,
      available: true,
    },
  });

  const [createBook] = useCreateBookMutation();

  const onSubmit: SubmitHandler<TBookForm> = async (data) => {
    const bookData = {
      ...data,
      available: Number(data.copies) > 0,
    };

    try {
      await createBook(bookData).unwrap();
      form.reset();
      toast.success("✅ Book added successfully!");
      navigate("/books");
    } catch (error) {
      console.error("Error creating book", error);
      toast.error("❌ Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4 ">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">
          📘 Add a New Book
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>📖 Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Author */}
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>👤 Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Author's name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>💠 Genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">Fiction</SelectItem>
                      <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                      <SelectItem value="SCIENCE">Science</SelectItem>
                      <SelectItem value="HISTORY">History</SelectItem>
                      <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                      <SelectItem value="FANTASY">Fantasy</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* ISBN */}
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>🔑 ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="ISBN number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Copies */}
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>📦 Number of Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      placeholder="e.g. 3"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-full md:w-1/2"
              >
                ➕ Add Book
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddBook;
