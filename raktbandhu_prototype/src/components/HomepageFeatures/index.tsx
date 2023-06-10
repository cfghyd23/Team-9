import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '100 Million People',
    Svg: require('@site/static/img/11.svg.svg').default,
    description: (
      <>
        
This includes blood donors, patients, blood banks, hospitals, and non-profit organizations.

      </>
    ),
  },
  {
    title: '1 in 2 Women/Children',
    Svg: require('@site/static/img/Screenshot 2023-06-11 024527.svg').default,
    description: (
      <>
        According to the National Family Health Survey 5 (2019-21), 57% of women of reproductive age (15-49 years) and 67% of
children under 5 years of age are anemic.
      </>
    ),
  },
  {
    title: 'Supporting Anemia Mukt Bharath Mission',
    Svg: require('@site/static/img/22.svg.svg').default,
    description: (
      <>
        The Anemia Mukt Bharath (AMB) program is a national initiative launched by the Government of India in 2018 to reduce
the prevalence of anemia in India.
      </>
    ),
  },
  {
    title: '20% increase in demand in next 3 years globally',
    Svg: require('@site/static/img/Screenshot 2023-06-11 024409.svg').default,
    description: (
      <>
        This growth is being driven by a number of factors, including an aging population, an increase in chronic diseases, and an
increase in the number of surgeries being performed.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
