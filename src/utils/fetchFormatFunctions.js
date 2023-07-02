import { urlFor } from 'client';
import createSanityMusicLink from './createSanityMusicLink';

export const historyFormattedFn = ({
  title,
  description,
  historyImgList,
  _id,
}) => {
  return {
    id: _id,
    title: { en: title.en, ua: title.ua },
    description: { en: description.en, ua: description.ua },
    historyImgList: historyImgList.map(({ srcJpg, srcWebp }) => {
      return {
        srcJpg: urlFor(srcJpg?.asset),
        srcWebp: urlFor(srcWebp?.asset),
      };
    }),
  };
};

export const bandFormattedFn = ({ title, description, bandList, _id }) => {
  return {
    id: _id,
    title: { en: title.en, ua: title.ua },
    description: { en: description.en, ua: description.ua },
    bandList: bandList.map(
      ({ name, specialization, bandImage, descriptionList }) => {
        return {
          name: { en: name.en, ua: name.ua },
          specialization: {
            en: specialization.en,
            ua: specialization.ua,
          },
          bandImage: urlFor(bandImage?.asset),
          descriptionList: descriptionList.map(({ description, _key }) => {
            return {
              id: _key,
              description: {
                en: description.en,
                ua: description.ua,
              },
            };
          }),
        };
      }
    ),
  };
};

export const contactsFormattedFn = ({
  title,
  description,
  email,
  phone,
  socialMediaList,
  _id,
}) => {
  return {
    id: _id,
    title: { en: title.en, ua: title.ua },
    description: { en: description.en, ua: description.ua },
    email,
    phone,
    socialMediaList: socialMediaList.map(({ link, name, _key }) => {
      return { link, name, id: _key };
    }),
  };
};

export const musicFormattedFn = ({ title, description, _id, musicList }) => {
  return {
    id: _id,
    title: { en: title.en, ua: title.ua },
    description: { en: description.en, ua: description.ua },
    musicList: musicList.map(
      ({ audio, songImage, description, name, lyrics, _key, songLink }) => {
        return {
          id: _key,
          name: { en: name.en, ua: name.ua },
          description: { en: description.en, ua: description.ua },
          songImage: urlFor(songImage?.asset),
          songLink,
          audio: createSanityMusicLink(audio),
          lyrics: lyrics[0]?.children[0]?.text,
        };
      }
    ),
  };
};

export const releasesFormattedFn = ({
  title,
  description,
  _id,
  latestReleasesList,
}) => {
  return {
    id: _id,
    title: { en: title.en, ua: title.ua },
    description: { en: description.en, ua: description.ua },
    latestReleasesList: latestReleasesList.map(({ songImage, songLink, name, _key }) => {
      return {
        id: _key,
        name: { en: name.en, ua: name.ua },
        songImage: urlFor(songImage?.asset),
        songLink,
      };
    }),
  };
};
