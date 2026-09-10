import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Demo copy for the Dhub proof of concept. These three cards describe what the POC is FOR,
// so that anyone landing on the homepage mid-demo understands what they are looking at.
const FeatureList = [
  {
    title: 'Written by anyone',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Every page on this site can be edited in a visual editor by someone with no GitHub
        account and no knowledge of Git.
      </>
    ),
  },
  {
    title: 'Reviewed by engineering',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Edits arrive as ordinary pull requests. The <code>develop</code> branch is protected,
        so nothing reaches this site without an engineer merging it.
      </>
    ),
  },
  {
    title: 'Stored as plain Markdown',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The content lives in this repository as <code>.md</code> files. Stop paying for the
        editor and you keep every word.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
