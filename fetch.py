#!/usr/bin/env python
# coding: utf-8

import yaml
import requests


def books():
    with open('_data/books.yml') as f:
        data = yaml.load(f)
    return data.keys()


def fetch(name):
    BASE = 'https://api.github.com/repos/wenku/'
    resp = requests.get(BASE + name)
    data = resp.json()

    rv = dict(
        stars=data['stargazers_count'],
        subscribers=data['subscribers_count'],
        homepage=data['homepage'],
        description=data['description'],
    )

    resp = requests.get(data['contributors_url'])
    contributors = []
    for item in resp.json():
        contributors.append(dict(
            user=item['login'],
            avatar=item['avatar_url'],
        ))

    rv['contributors'] = contributors
    return rv


def main():
    rv = {}
    for name in books():
        rv[name] = fetch(name)

    with open('_data/status.yml', 'w') as f:
        yaml.safe_dump(rv, f, allow_unicode=True, default_flow_style=False)


main()
