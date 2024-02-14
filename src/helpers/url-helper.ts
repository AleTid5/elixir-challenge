export const urlBuilder = (baseUrl: string, params: Record<string, string>) => {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
};

export const getGoogleMapsUrl = (coordinates: [string, string]) =>
  `https://www.google.com/maps/search/?api=1&query=${coordinates.join(",")}`;
