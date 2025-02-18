

import React from "react";

import './news.scss';

type NewsItem = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const newsData: NewsItem[] = [
  { id: 1, title: "Новость 1", content: "Содержание новости 1", date: "2025-02-17" },
  { id: 2, title: "Новость 2", content: "Содержание новости 2", date: "2025-02-16" },
  { id: 3, title: "Новость 3", content: "Содержание новости 3", date: "2025-02-15" },
  { id: 4, title: "Новость 4", content: "Содержание новости 4", date: "2025-02-14" },
  { id: 5, title: "Новость 1", content: "Содержание новости 5", date: "2025-02-17" },
  { id: 6, title: "Новость 2", content: "Содержание новости 6", date: "2025-02-16" },
  { id: 7, title: "Новость 3", content: "Содержание новости 7", date: "2025-02-15" },
  { id: 8, title: "Новость 4", content: "Содержание новости 8", date: "2025-02-14" },
];

export const News = () => {
  const NewsItem = ({ item }: { item: NewsItem }) => (
    <li>
      <h6>{item.title}</h6>
      <p>{item.content}</p>
      <span>{item.date}</span>
    </li>
  );

  return (
    <div className="news">
      <h1>Новости</h1>
      <ul>
        {newsData.length ? newsData.map((item) => <NewsItem key={item.id} item={item} />) : <p>Новостей нет</p>}
      </ul>
    </div>
  );
};
