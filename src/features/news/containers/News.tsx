import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export default function News() {
  return (
    <div className="flex flex-col h-full">
      <header className="p-4 md:p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">News Management</h1>
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-10 w-full rounded-md shadow-sm"
            placeholder="Search news..."
            type="search"
          />
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link className="block" href="#">
                  <img
                    alt="News Thumbnail"
                    className="w-full h-40 object-cover"
                    height={225}
                    src="https://www.getvisavietnam.com/wp-content/uploads/2024/01/My-Khe-Beach-Da-Nang.jpg"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">
                      Tech Company Unveils Innovative New Product
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      A leading technology company has unveiled a groundbreaking
                      new product that is expected to disrupt the industry and
                      change the way people interact with technology.
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </main>
      <footer className="p-4 md:p-6 flex items-center justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#">Previous</PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#">Next</PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </footer>
    </div>
  );
}
