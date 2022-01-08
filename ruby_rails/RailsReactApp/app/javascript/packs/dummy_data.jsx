import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

var target_dom = null;

document.addEventListener('DOMContentLoaded', () => {
    target_dom = document.querySelector('#data');
    const url = new URL(location.href);
    let f = url.searchParams.get("name");
    if (f == null) {
        f = '';
    }
    getData(f);
})

function getData(f) {
    let url = "http://localhost:3000/data/ajax";
    fetch(url)
    .then(
        res => res.json(),
        (error) => {
            const el = (
                <p>ERROR!!</p>
            );
            ReactDOM.render(el, target_dom);
        }
    )
    .then(
        (result) => {
            let arr = [];
            for(let n in result.rss.channel.item) {
                let data = result.rss.channel.item[n];
                arr.push(
                    <tr key={data.title}>
                        <th><a href={data.link}>{data.title}</a></th>
                        <td className="small">{data.pubDate}</td>
                    </tr>
                );
            }
            const el = (
                <table className="table mt-4">
                    <thead className="thead-dark">
                        <tr>
                            <th><a href={result.rss.channel.link}>{result.rss.channel.title}</a></th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>{arr}</tbody>
                </table>
            );
            ReactDOM.render(el, target_dom);
        },
        (error) => {
            const el = (
                <p>ERROR!!</p>
            )
            ReactDOM.render(el, target_dom);
        }
    );
}