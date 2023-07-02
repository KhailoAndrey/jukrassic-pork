const createSanityMusicLink = audio => {
  const musicItem = audio.asset._ref;
  const assetRefParts = musicItem.split('-');

  const id = assetRefParts[1];
  const format = assetRefParts[2];

  return `https://cdn.sanity.io/files/fsdmjee1/production/${id}.${format}`;
};

export default createSanityMusicLink;
