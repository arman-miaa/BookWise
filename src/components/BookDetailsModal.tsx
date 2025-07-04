import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGetBookQuery } from "@/redux/api/baseApi";
import type { BookModalProps } from "@/types";

const BookDetailsModal = ({ bookId, open, onOpenChange }: BookModalProps) => {
  const { data, isLoading, error } = useGetBookQuery(bookId, {
    skip: !bookId,
  });

  const book = data?.data;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            📘 Book Information
          </DialogTitle>
        </DialogHeader>

        {isLoading && (
          <p className="text-sm text-gray-500 text-center">
            Loading book details...
          </p>
        )}

        {error && (
          <p className="text-sm text-red-500 text-center">
            Failed to load book information.
          </p>
        )}

        {book && (
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Title:</span> {book.title}
            </div>
            <div>
              <span className="font-semibold">Author:</span> {book.author}
            </div>
            <div>
              <span className="font-semibold">Genre:</span> {book.genre}
            </div>
            <div>
              <span className="font-semibold">ISBN:</span> {book.isbn}
            </div>
            <div>
              <span className="font-semibold">Copies Available:</span>{" "}
              {book.copies}
            </div>
            <div>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={
                  book.available
                    ? "text-green-600 font-medium"
                    : "text-red-600 font-medium"
                }
              >
                {book.available ? "Available" : "Not Available"}
              </span>
            </div>
            <div>
              <span className="font-semibold">Description:</span>{" "}
              <p className="mt-1 text-gray-600">
                {book.description || "No description provided."}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookDetailsModal;
