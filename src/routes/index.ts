
import { createBrowserRouter } from "react-router";

import Books from "../pages/Books";
import AddBook from "@/pages/AddBook";
import BorrowSummary from "@/pages/BorrowSummary";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'books',
                Component: Books
            },
            {
                path: 'create-book',
                Component: AddBook
            },
            {
                path: 'borrow-summary',
                Component: BorrowSummary
            }

        ]
    }
])

export default router;