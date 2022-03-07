import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: "viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs",
});

const unsplash = async (imgSrc: string): Promise<any> => {
  const result = await unsplashApi.search.getPhotos({
    query: imgSrc,
    orientation: "landscape",
  });
  return result?.response?.results;
};

export default unsplash;
