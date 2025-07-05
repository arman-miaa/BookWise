import { Link } from "react-router";
import { Button } from "@/components/ui/button"; 
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="text-red-500 w-16 h-16" />
        </div>
        <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600">
          We couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            🔙 Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
