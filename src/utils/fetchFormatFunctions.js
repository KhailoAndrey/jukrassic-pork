import { urlFor } from 'client';

export const historyFormattedFn = ({
  title,
  description,
  historyImgList,
  _id,
}) => {
  return {
    id: _id,
    title: !!title ? { en: title.en, ua: title.ua } : null,
    description: !!description
      ? { en: description.en, ua: description.ua }
      : null,
    historyImgList: historyImgList
      ? historyImgList.map(({ srcJpg, srcWebp }) => {
          return {
            srcJpg: srcJpg?.asset ? urlFor(srcJpg?.asset) : null,
            srcWebp: srcWebp?.asset ? urlFor(srcWebp?.asset) : null,
          };
        })
      : null,
  };
};

export const bandFormattedFn = ({ title, description, bandList, _id }) => {
  return {
    id: _id,
    title: !!title ? { en: title.en, ua: title.ua } : null,
    description: !!description
      ? { en: description.en, ua: description.ua }
      : null,
    bandList: bandList
      ? bandList.map(({ name, specialization, bandImage, descriptionList }) => {
          return {
            name: !!name ? { en: name.en, ua: name.ua } : null,
            specialization: !!specialization
              ? {
                  en: specialization.en,
                  ua: specialization.ua,
                }
              : null,
            bandImage: bandImage?.asset ? urlFor(bandImage?.asset) : null,
            descriptionList: descriptionList.map(({ description, _key }) => {
              return {
                id: _key,
                description: !!description
                  ? {
                      en: description.en,
                      ua: description.ua,
                    }
                  : null,
              };
            }),
          };
        })
      : null,
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
    title: !!title ? { en: title.en, ua: title.ua } : null,
    description: !!description
      ? { en: description.en, ua: description.ua }
      : null,
    email: !!email ? email : null,
    phone: !!phone ? phone : null,
    socialMediaList: socialMediaList
      ? socialMediaList.map(({ link, name, _key }) => {
          return {
            link: !!link ? link : null,
            name: !!name ? name : null,
            id: _key,
          };
        })
      : null,
  };
};

export const musicFormattedFn = ({ title, description, _id, musicList }) => {
  return {
    id: _id,
    title: !!title ? { en: title.en, ua: title.ua } : null,
    description: !!description
      ? { en: description.en, ua: description.ua }
      : null,
    musicList: musicList
      ? musicList.map(
          ({
            songImage,
            description,
            name,
            lyrics,
            _key,
            songLink,
            songDownloadLink,
          }) => {
            return {
              id: _key,
              name: !!name ? { en: name.en, ua: name.ua } : null,
              description: !!description
                ? { en: description.en, ua: description.ua }
                : null,
              songImage: songImage?.asset ? urlFor(songImage?.asset) : null,
              songLink: !!songLink ? songLink : null,
              songDownloadLink: !!songDownloadLink ? songDownloadLink : null,
              lyrics: !!lyrics ? lyrics[0]?.children[0]?.text : null,
            };
          }
        )
      : null,
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
    title: !!title ? { en: title.en, ua: title.ua } : null,
    description: !!description
      ? { en: description.en, ua: description.ua }
      : null,
    latestReleasesList: latestReleasesList
      ? latestReleasesList.map(({ songImage, songLink, name, _key }) => {
          return {
            id: _key,
            name: !!name ? { en: name.en, ua: name.ua } : null,
            songImage: songImage?.asset ? urlFor(songImage?.asset) : null,
            songLink: songLink ? songLink : null,
          };
        })
      : null,
  };
};

export const videoFormattedFn = ({ title, _id, videoLinksList }) => {
  return {
    id: _id,
    title: !!title ? { en: title.en, ua: title.ua } : null,
    videoLinksList: videoLinksList
      ? videoLinksList.map(({ videoLink, name, _key }) => {
          return {
            id: _key,
            name: !!name ? { en: name.en, ua: name.ua } : null,
            videoLink: !!videoLink ? videoLink : null,
          };
        })
      : null,
  };
};
