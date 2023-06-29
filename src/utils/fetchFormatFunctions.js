import { urlFor } from 'client';

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
