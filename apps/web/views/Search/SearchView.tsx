import { meilisearch } from "client/meilisearch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "components/ui/Accordion"
import { Button } from "components/ui/Button"
import { Checkbox } from "components/ui/Checkbox"
import { Label } from "components/ui/Label"
import Link from "next/link"

import { createSearchParamsCache, parseAsString } from "nuqs/server"
import { SearchBar } from "./SearchBar"
import { Sorter } from "./Sorter"

const searchParamsCache = createSearchParamsCache({
  q: parseAsString.withDefault(" "),
  sortBy: parseAsString.withDefault(""),
})

export async function SearchView({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const parsedSearchParams = searchParamsCache.parse(searchParams)

  const index = await meilisearch?.getIndex("products")

  const hits = await (await index.search(parsedSearchParams.q, { sort: parsedSearchParams.sortBy ? [parsedSearchParams.sortBy] : undefined, limit: 50 })).hits

  return (
    <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <div>
          <h2 className="mb-4 text-lg font-semibold">Filters</h2>
          <SearchBar />
          <Accordion className="w-full" collapsible type="single">
            <AccordionItem value="category">
              <AccordionTrigger className="text-base">Category</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-clothing" />
                    Clothing{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-electronics" />
                    Electronics{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-home" />
                    Home & Garden{"\n                              "}
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="price-under50" />
                    Under $50{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="price-50to100" />
                    $50 to $100{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="price-100to200" />
                    $100 to $200{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="price-over200" />
                    Over $200{"\n                              "}
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rating">
              <AccordionTrigger className="text-base">Rating</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="rating-5stars" />5 Stars{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="rating-4stars" />4 Stars & Up{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="rating-3stars" />3 Stars & Up{"\n                              "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="rating-2stars" />2 Stars & Up{"\n                              "}
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Products</h1>
            <Sorter />
          </div>
          {/* <NextInstantSearch
            meilisearchOptions={{ sort: parsedSearchParams.sortBy ? [parsedSearchParams.sortBy] : [] }}
            searchParams={{ q: parsedSearchParams.q || " " }}
            options={{ revalidate: 60 }}
            cacheKey={parsedSearchParams.sortBy || ""}
            indexName="products"
            render={({ hits }: any) => (
              <> */}
          {/* <pre>xdxd {JSON.stringify(payload.hits, null, 2)}</pre> */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {hits.map((singleResult) => (
              <div className="group relative overflow-hidden rounded-lg" key={singleResult.id}>
                <Link className="absolute inset-0 z-10" href={`/products/${singleResult.handle}`}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Product 1"
                  className="h-60 w-full object-cover"
                  height={singleResult.images[0].height || 300}
                  src={singleResult.images[0].url}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={singleResult.images[0].width || 400}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="text-lg font-semibold md:text-xl">{singleResult.title}</h3>
                  <h4 className="text-base font-semibold md:text-lg">${singleResult.minPrice || 1337}</h4>
                  <Button className="mt-2" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* </> */}
          {/* )}
          /> */}
        </div>
      </div>
    </div>
  )
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}
