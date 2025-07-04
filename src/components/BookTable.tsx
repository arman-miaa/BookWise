import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBook } from "@/types";
import {
  Trash2,
  PencilLine,
  Check,
  X,
  Info,
  BookOpenCheck,
} from "lucide-react";
import { useState } from "react";
import BookDetailsModal from "./BookDetailsModal";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import BookUpdateModal from "./BookUpdateModal";
import { useDeleteBookMutation } from "@/redux/api/baseApi";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import BorrowBookModal from "./BorrowBookModal";
import { cn } from "@/lib/utils";

const BookTable = ({ books }: { books: IBook[] }) => {
  const [selectedBookId, setSelectedBookId] = useState("");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [borrowOpen, setBorrowOpen] = useState(false);
  const [deleteBook] = useDeleteBookMutation();

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="md:text-base bg-gray-100">
            <TableHead>📖 Title</TableHead>
            <TableHead>✍️ Author</TableHead>
            <TableHead>🎨 Genre</TableHead>
            <TableHead>🔢 ISBN</TableHead>
            <TableHead>📚 Copies</TableHead>
            <TableHead>✅ Status</TableHead>
            <TableHead>⚙️ Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium py-4">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>
                {book.genre.charAt(0).toUpperCase() +
                  book.genre.slice(1).toLowerCase()}
              </TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>
                {book.copies > 0 ? (
                  <Check className="text-green-600 w-5 h-5" />
                ) : (
                  <X className="text-red-500 w-5 h-5" />
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  {/* Edit */}
                  <Tooltip>
                    <TooltipTrigger>
                      <PencilLine
                        className="text-blue-600 hover:scale-110 transition w-5 h-5 cursor-pointer"
                        onClick={() => {
                          setSelectedBookId(book._id);
                          setUpdateOpen(true);
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>Edit Book</TooltipContent>
                  </Tooltip>

                  {/* Delete */}
                  <AlertDialog>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <AlertDialogTrigger asChild>
                          <Trash2 className="text-rose-600 hover:scale-110 transition w-5 h-5 cursor-pointer" />
                        </AlertDialogTrigger>
                      </TooltipTrigger>
                      <TooltipContent>Delete Book</TooltipContent>
                    </Tooltip>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                        <AlertDialogDescription className="text-black">
                          Are you sure? This book will be permanently removed
                          from the library.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                        <AlertDialogAction className="cursor-pointer bg-blue-500 hover:bg-blue-600"
                          onClick={async () => {
                            try {
                              await deleteBook(book._id).unwrap();
                              toast.success("Book deleted successfully!");
                            } catch (err: any) {
                              toast.error("Failed to delete the book.");
                            }
                          }}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {/* Details */}
                  <Tooltip>
                    <TooltipTrigger>
                      <Info
                        className="text-indigo-600 hover:scale-110 transition w-5 h-5 cursor-pointer"
                        onClick={() => {
                          setSelectedBookId(book._id);
                          setDetailsOpen(true);
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>Book Details</TooltipContent>
                  </Tooltip>

                  {/* Borrow */}
                  <Tooltip>
                    <TooltipTrigger>
                      <BookOpenCheck
                        className={cn(
                          "transition w-5 h-5",
                          book.copies > 0
                            ? "text-amber-500 hover:scale-110 cursor-pointer"
                            : "text-gray-400 cursor-not-allowed"
                        )}
                        onClick={() => {
                          if (book.copies > 0) {
                            setSelectedBookId(book._id);
                            setBorrowOpen(true);
                          }
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>Borrow Book</TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modals */}
      <BookDetailsModal
        bookId={selectedBookId}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
      <BookUpdateModal
        bookId={selectedBookId}
        open={updateOpen}
        onOpenChange={setUpdateOpen}
      />
      <BorrowBookModal
        bookId={selectedBookId}
        open={borrowOpen}
        onOpenChange={setBorrowOpen}
      />
    </>
  );
};

export default BookTable;
