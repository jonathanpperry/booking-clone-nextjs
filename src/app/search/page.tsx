import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
};

type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

async function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) return notFound();
  //   console.log(searchParams);
  const results = await fetchResults(searchParams);

  if (!results) return <div>No results...</div>;

  return <div>SearchPage</div>;
}

export default SearchPage;
