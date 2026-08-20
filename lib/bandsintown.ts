export type BandsintownEvent = {
  id: string;
  datetime: string;
  url: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
  offers?: {
    type: string;
    url: string;
    status: string;
  }[];
};

export async function getBandsintownEvents(): Promise<BandsintownEvent[]> {
  const apiKey = process.env.BANDSINTOWN_API_KEY;

  if (!apiKey) {
    throw new Error("Missing BANDSINTOWN_API_KEY");
  }

  const artist = encodeURIComponent("Ponder the Albatross");

  const response = await fetch(
    `https://rest.bandsintown.com/artists/${artist}/events?app_id=${apiKey}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Bandsintown request failed: ${response.status}`);
  }

  return response.json();
}