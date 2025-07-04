import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-blue-500 text-lg font-medium">Loading summary...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-red-500 text-lg font-medium">
          ❌ Failed to fetch borrow summary.
        </p>
      </div>
    );
  }

  const summary = data?.data || [];

  return (
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        📘 Borrow Summary
      </h1>

      {summary.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No books have been borrowed yet.
        </p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            <thead className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                  📖 Title
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                  🔑 ISBN
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase">
                  📦 Total Quantity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-100 dark:divide-gray-800">
              {summary.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <td className="py-3 px-6 text-sm">{item.book?.title}</td>
                  <td className="py-3 px-6 text-sm">{item.book?.isbn}</td>
                  <td className="py-3 px-6 text-sm font-medium text-blue-500">
                    {item.totalQuantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BorrowSummary;
