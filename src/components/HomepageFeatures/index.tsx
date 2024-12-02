import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Performance Oriented',
        Svg: require('@site/static/img/bolt-solid.svg').default,
        description: (
            <>
                Plex was designed with performance in mind. Plex supports SQLite or MariaDB out of the box.
                Plex also uses Redis for punishments instead of traditional YAML / JSON files.
            </>
        ),
    },
    {
        title: 'Fully Customizable',
        Svg: require('@site/static/img/sliders-solid.svg').default,
        description: (
            <>
                Plex is designed to be customizable to fit your server's needs. Almost all messages within the plugin
                can be easily changed.
            </>
        ),
    },
    {
        title: 'Permissions',
        Svg: require('@site/static/img/dice-solid.svg').default,
        description: (
            <>
                Plex allows you to use integrate with a permission system and "fake op" players. This allows server
                owners to have much more control over what is and isn't allowed.
                Any Vault-compatible permission plugin will integrate with Plex and can be used instead of ranks.
            </>
        ),
    },
    {
        title: 'Modular',
        Svg: require('@site/static/img/download-solid.svg').default,
        description: (
            <>
                Plex features a fully modular system. You can add or remove modules based on how your server is
                configured. If you're using permissions,
                you likely won't need our command blocker, but you will if you use ranks.
            </>
        ),
    },
    {
        title: 'Converters',
        Svg: require('@site/static/img/forward-fast-solid.svg').default,
        description: (
            <>
                We have written tools to convert your existing data from TotalFreedomMod to Plex. This will make your
                transition even easier so you won't
                have to start fresh.
            </>
        ),
    },
    {
        title: 'Quality Control',
        Svg: require('@site/static/img/bug-slash-solid.svg').default,
        description: (
            <>
                Each release is tested to find bugs before you have to encounter them on your server. Plex's codebase
                was designed for rapid progress and
                won't unexpectedly break.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
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
