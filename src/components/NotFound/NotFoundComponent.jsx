import { useTranslation } from 'react-i18next';

import LabelNotFound from './LabelNotFound/LabelNotFound';
import ImagesNotFound from './ImagesNotFound/ImagesNotFound';
import TextNotFound from './TextNotFound/TextNotFound';
import BackButton from 'components/CommonButton/BackButton';

import scss from './NotFoundComponent.module.scss';

function NotFoundComponent() {
  const { t } = useTranslation();

  return (
    <section className={scss.containerNotFound}>
      <div className="container">
        <LabelNotFound labelNotFound={t('label_not_found')} />
        <div className={scss.envelopeContent}>
          <ImagesNotFound />
          <TextNotFound textNotFound={t('text_not_found')} />
          <BackButton valueButton={t('back_to_home')} />
        </div>
      </div>
    </section>
  );
}

export default NotFoundComponent;
