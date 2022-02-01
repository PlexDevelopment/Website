import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Performance Oriented',
    Svg: require('../../static/img/bolt-solid.svg').default,
    description: (
      <>
        Plex was designed with performance in mind. Plex supports SQLite, MariaDB, and MongoDB out of the box.
        Plex also uses Redis for punishments instead of traditional YAML / JSON files.
      </>
    ),
  },
  {
    title: 'Fully Customizable',
    Svg: require('../../static/img/cogs-solid.svg').default,
    description: (
      <>
        Plex is designed to be customizable to fit your server's needs. Almost all messages within the plugin can be easily changed.
      </>
    ),
  },
  {
    title: 'Permissions and Ranks',
    Svg: require('../../static/img/dice-solid.svg').default,
    description: (
      <>
        Plex allows you to use a traditional ranking system with "true op" or integrate with a permission system and "fake op".
        Any standard permission plugin will integrate with Plex and can be used instead of ranks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
