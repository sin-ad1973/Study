import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component {

    constructor(props) {
        super(props);
        this.rankDisp = this.rankDisp.bind(this);
    }

    rankDisp = (() => {
        const { category, ranking, error } = this.props;
        if (error) {
            return <p>エラーが発生しました。リロードして下さい。</p>;
        } else if (typeof ranking === 'undefined') {
            return <p>読み込み中...</p>;
        } else {
            return (
                <ol>
                    {ranking.map(item => (
                        <li key={`rannking-item-${item.code}`}>
                            <img alt={item.name} src={item.imageUrl} />
                            <a href={item.url} target="_blank">{item.name}</a>
                        </li>
                    ))}
                </ol>
            );
        }
    });

    componentWillMount() {
        this.props.onMount(this.props.categoryId);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId);
        }
    }
    render() {
        const { category } = this.props;
        const resultTag = this.rankDisp();
        return (
            <div>
                <h2>{
                        typeof category !== 'undefined'
                        ? `${category.name}のランキング`
                        : ''
                    }
                </h2>
                { resultTag }
                <p>カテゴリーID: {this.props.categoryId}</p>
            </div>
        )
    }
}

Ranking.propTypes = {
    categoryId: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,

    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),

    ranking: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),

    error: PropTypes.bool.isRequired
};

Ranking.defaultProps = {
    categoryId: '1'
};