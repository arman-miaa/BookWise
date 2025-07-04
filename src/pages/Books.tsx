import BookTable from "@/components/BookTable";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import { Link } from "react-router";
import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Loader from "@/components/Loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Books = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("desc");
  const [genre, setGenre] = useState("");
  const limit = 10;

  const { data, error, isLoading } = useGetBooksQuery(
    {
      page,
      limit,
      sort,
      sortBy: "createdAt",
      filter: genre,
    },
    {
      pollingInterval: 30000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  const books = data?.data || [];
  const totalPages = data?.meta?.totalPages || 1;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          📘 All Books
        </h1>
        <Link to="/create-book">
          <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white">
            ➕ Add Book
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <Select onValueChange={(value) => setSort(value)} defaultValue="desc">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Newest First</SelectItem>
            <SelectItem value="asc">Oldest First</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => {
            setGenre(value === "ALL" ? "" : value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All</SelectItem>
            <SelectItem value="FICTION">Fiction</SelectItem>
            <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
            <SelectItem value="SCIENCE">Science</SelectItem>
            <SelectItem value="HISTORY">History</SelectItem>
            <SelectItem value="BIOGRAPHY">Biography</SelectItem>
            <SelectItem value="FANTASY">Fantasy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table or Message */}
      {error && <p className="text-red-500">❌ Error fetching books</p>}
      {books.length > 0 ? (
        <BookTable books={books} />
      ) : (
        <p className="text-center text-gray-500">No books found.</p>
      )}

      {/* pagination */}
      <div className="flex justify-center gap-2 mt-6 text-sm items-center">
        <Button
          disabled={page === 1}
          variant={"outline"}
          className="border-none"
          onClick={() => setPage((prev) => prev - 1)}
        >
          <MoveLeft className="w-4 h-4" />
          Prev
        </Button>
        <span className="px-3 py-1 rounded">
          Page {page} of {totalPages}
        </span>
        <Button
          disabled={page === totalPages}
          variant={"outline"}
          className="border-none"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
          <MoveRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Books;
