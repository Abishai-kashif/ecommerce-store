import { client } from "@/lib/sanity";

export default async function getData(query: string) {
	const data = await client.fetch(query);

	return data;
}
