import LabelNotFound from './LabelNotFound/LabelNotFound';
import ImagesNotFound from './ImagesNotFound/ImagesNotFound';
import TextNotFound from './TextNotFound/TextNotFound';
import ButtonNotFound from './ButtonNotFound/ButtonNotFound';

import scss from './NotFoundComponent.module.scss';

function NotFoundComponent() {
  const textNotFound =
    'Sorry, we can`t seem to find the page you`re looking for! It might be an old link or the page may have been removed.';
  return (
    <section className={scss.containerNotFound}>
      <div className="container">
        <LabelNotFound labelNotFound="oops!" />
        <div className={scss.envelopeContent}>
          <ImagesNotFound />
          <TextNotFound textNotFound={textNotFound} />
          <ButtonNotFound valueButtonNotFound="Back to Home" />
        </div>
      </div>
    </section>
  );
}

export default NotFoundComponent;
